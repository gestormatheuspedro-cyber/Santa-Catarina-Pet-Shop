import React, { useState, useRef, useEffect } from "react";
import { Play, ExternalLink } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title: string;
  ariaLabel?: string;
  aspectRatio?: "9:16" | "16:9" | "auto";
}

function extractDriveId(url: string): string | null {
  if (!url) return null;
  if (url.startsWith("/api/video/")) {
    return url.replace("/api/video/", "").split("?")[0];
  }
  const match = url.match(/id=([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return match[1];
  if (/^[a-zA-Z0-9_-]{25,}$/.test(url)) return url;
  return null;
}

function resolveVideoSources(url: string): { directUrls: string[]; embedUrl: string | null } {
  const driveId = extractDriveId(url);
  if (driveId) {
    return {
      directUrls: [
        `https://drive.usercontent.google.com/download?id=${driveId}&export=download`,
        `https://drive.google.com/uc?export=download&id=${driveId}`,
      ],
      embedUrl: `https://drive.google.com/file/d/${driveId}/preview`,
    };
  }
  return {
    directUrls: [url],
    embedUrl: null,
  };
}

export default function VideoPlayer({
  videoUrl,
  posterUrl,
  title,
  ariaLabel,
  aspectRatio = "9:16",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  const { directUrls, embedUrl } = resolveVideoSources(videoUrl);
  const currentDirectUrl = directUrls[sourceIndex] || directUrls[0];

  useEffect(() => {
    // Reset state if videoUrl changes
    setSourceIndex(0);
    setUseIframeFallback(false);
    setIsPlaying(false);
  }, [videoUrl]);

  const handleVideoError = () => {
    if (sourceIndex < directUrls.length - 1) {
      setSourceIndex((prev) => prev + 1);
    } else if (embedUrl) {
      setUseIframeFallback(true);
    }
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (useIframeFallback) return;
    if (!videoRef.current) return;

    videoRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              if (embedUrl) {
                setUseIframeFallback(true);
              }
            });
        }
      });
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden shadow-xl border border-border-light bg-black rounded-2xl group select-none ${
        aspectRatio === "9:16" ? "aspect-[9/16]" : aspectRatio === "16:9" ? "aspect-video" : ""
      }`}
    >
      {!useIframeFallback ? (
        <video
          ref={videoRef}
          src={currentDirectUrl}
          poster={posterUrl}
          controls
          controlsList="nodownload"
          playsInline
          // @ts-ignore
          webkit-playsinline="true"
          preload="metadata"
          aria-label={ariaLabel || title}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={handleVideoError}
          className="w-full h-full object-cover rounded-[inherit] block focus:outline-none"
          style={{
            pointerEvents: "auto",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : embedUrl ? (
        /* Google Drive Embedded Player Fallback for static hosts */
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; fullscreen"
          className="w-full h-full border-0 rounded-[inherit] bg-black"
        />
      ) : (
        /* Poster Fallback if everything fails */
        <div className="relative w-full h-full bg-slate-900 flex flex-col items-center justify-center p-4">
          {posterUrl && (
            <img src={posterUrl} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
          )}
          <a
            href={currentDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex flex-col items-center gap-2 text-center text-white bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/20 hover:bg-black transition-colors"
          >
            <ExternalLink className="w-8 h-8 text-primary" />
            <p className="text-xs font-semibold">{title}</p>
            <p className="text-[11px] text-white/80">Clique para assistir o vídeo</p>
          </a>
        </div>
      )}

      {/* Play Button Overlay when video is paused (HTML5 video mode) */}
      {!isPlaying && !useIframeFallback && (
        <div
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors cursor-pointer z-10"
        >
          <button
            type="button"
            onClick={handlePlayClick}
            aria-label="Reproduzir vídeo"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg shadow-primary/40 transform group-hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer"
          >
            <Play size={26} className="fill-current ml-1" />
          </button>
        </div>
      )}

      {/* Top Title Badge */}
      {title && (
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-sans font-medium tracking-wide uppercase pointer-events-none z-20">
          {title}
        </div>
      )}
    </div>
  );
}


