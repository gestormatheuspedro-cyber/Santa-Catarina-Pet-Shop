import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import https from 'node:https';
import {defineConfig, Plugin} from 'vite';

function videoProxyPlugin(): Plugin {
  const handler = (req: any, res: any, next: any) => {
    if (!req.url || !req.url.startsWith('/api/video/')) {
      return next();
    }
    const fileId = req.url.split('/api/video/')[1]?.split('?')[0];
    if (!fileId) {
      res.statusCode = 400;
      return res.end('Missing file id');
    }

    const driveUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download`;
    const headers: Record<string, string> = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    };
    if (req.headers.range) {
      headers['Range'] = req.headers.range;
    }

    const driveReq = https.get(driveUrl, { headers }, (driveRes) => {
      if (driveRes.statusCode && driveRes.statusCode >= 300 && driveRes.statusCode < 400 && driveRes.headers.location) {
        https.get(driveRes.headers.location, { headers }, (redirectRes) => {
          pipeStream(redirectRes, res);
        }).on('error', (err) => {
          console.error('Video proxy redirect error:', err);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.end('Video stream error');
          }
        });
        return;
      }
      pipeStream(driveRes, res);
    });

    driveReq.on('error', (err) => {
      console.error('Video proxy error:', err);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end('Video error');
      }
    });
  };

  function pipeStream(sourceRes: any, targetRes: any) {
    targetRes.statusCode = sourceRes.statusCode || 200;
    targetRes.setHeader('Content-Type', 'video/mp4');
    targetRes.setHeader('Accept-Ranges', 'bytes');
    targetRes.setHeader('Content-Disposition', 'inline');
    targetRes.setHeader('Access-Control-Allow-Origin', '*');

    if (sourceRes.headers['content-length']) {
      targetRes.setHeader('Content-Length', sourceRes.headers['content-length']);
    }
    if (sourceRes.headers['content-range']) {
      targetRes.setHeader('Content-Range', sourceRes.headers['content-range']);
    }

    sourceRes.pipe(targetRes);
  }

  return {
    name: 'video-proxy-plugin',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), videoProxyPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
