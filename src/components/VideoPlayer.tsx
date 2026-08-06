import React, { useState, useRef, useEffect } from "react";
import { Play, RotateCcw } from "lucide-react";

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

function resolveVideoSources(url: string): { directUrls: string[]; driveId: string | null; embedUrl: string | null } {
  const driveId = extractDriveId(url);
  if (driveId) {
    return {
      directUrls: [
        `/api/video/${driveId}`,
        `https://drive.usercontent.google.com/download?id=${driveId}&export=download`,
        `https://drive.google.com/uc?export=download&id=${driveId}`,
      ],
      driveId,
      embedUrl: `https://drive.google.com/file/d/${driveId}/preview`,
    };
  }
  return {
    directUrls: [url],
    driveId: null,
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
  const [hasPermanentError, setHasPermanentError] = useState(false);

  const { directUrls, driveId, embedUrl } = resolveVideoSources(videoUrl);
  const currentDirectUrl = directUrls[sourceIndex] || directUrls[0];
  const effectivePosterUrl = posterUrl || (driveId ? `https://lh3.googleusercontent.com/d/${driveId}` : undefined);

  useEffect(() => {
    setSourceIndex(0);
    setUseIframeFallback(false);
    setHasPermanentError(false);
    setIsPlaying(false);
  }, [videoUrl]);

  const handleVideoError = () => {
    if (sourceIndex < directUrls.length - 1) {
      setSourceIndex((prev) => prev + 1);
    } else if (embedUrl) {
      setUseIframeFallback(true);
    } else {
      setHasPermanentError(true);
    }
  };

  const handlePlayClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    if (useIframeFallback) return;
    if (!videoRef.current) return;

    if (hasPermanentError) {
      setHasPermanentError(false);
      setSourceIndex(0);
      videoRef.current.load();
    }

    videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              if (embedUrl) {
                setUseIframeFallback(true);
              } else {
                setHasPermanentError(true);
              }
            });
        }
      });
  };

  return (
    <div
      className={`relative w-full mx-auto overflow-hidden shadow-2xl border border-border-light/40 bg-black rounded-2xl group select-none touch-manipulation ${
        aspectRatio === "9:16"
          ? "aspect-[9/16] max-h-[75vh] sm:max-h-[85vh]"
          : aspectRatio === "16:9"
          ? "aspect-video w-full"
          : "w-full h-auto"
      }`}
    >
      {!useIframeFallback ? (
        <video
          ref={videoRef}
          src={currentDirectUrl}
          poster={effectivePosterUrl}
          controls
          controlsList="nodownload"
          playsInline
          // @ts-ignore
          webkit-playsinline="true"
          preload="metadata"
          aria-label={ariaLabel || title}
          onPlay={() => setIsPlaying(true)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onError={handleVideoError}
          className="w-full h-full object-cover rounded-[inherit] block focus:outline-none touch-auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : embedUrl ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0 rounded-[inherit] bg-black block"
        />
      ) : null}

      {/* Center Play Overlay for HTML5 video */}
      {!useIframeFallback && (
        <div
          onClick={handlePlayClick}
          className={`absolute inset-0 flex flex-col items-center justify-center bg-black/25 backdrop-blur-[1px] transition-all duration-300 z-10 ${
            isPlaying ? "opacity-0 pointer-events-none invisible" : "opacity-100 pointer-events-auto cursor-pointer"
          }`}
        >
          {!hasPermanentError ? (
            <button
              type="button"
              onClick={handlePlayClick}
              aria-label="Reproduzir vídeo"
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg shadow-primary/40 transform active:scale-90 hover:scale-105 transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <Play size={30} className="fill-current ml-1" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePlayClick}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs shadow-lg transition-all"
            >
              <RotateCcw size={16} />
              <span>Tentar recarregar vídeo</span>
            </button>
          )}
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



