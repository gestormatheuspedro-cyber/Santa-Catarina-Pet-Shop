import React, { useState, useRef } from "react";
import { Play, AlertCircle } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title: string;
  ariaLabel?: string;
  aspectRatio?: "9:16" | "16:9" | "auto";
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
  const [hasError, setHasError] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
            .catch(() => setHasError(true));
        }
      });
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden shadow-xl border border-border-light bg-black rounded-2xl group select-none ${
        aspectRatio === "9:16" ? "aspect-[9/16]" : aspectRatio === "16:9" ? "aspect-video" : ""
      }`}
    >
      {!hasError ? (
        <video
          ref={videoRef}
          src={videoUrl}
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
          onError={() => setHasError(true)}
          className="w-full h-full object-cover rounded-[inherit] block focus:outline-none"
          style={{
            pointerEvents: "auto",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        /* Poster Fallback if video fails */
        <div className="relative w-full h-full bg-slate-900 flex flex-col items-center justify-center p-4">
          {posterUrl && (
            <img src={posterUrl} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
          )}
          <div className="relative z-10 flex flex-col items-center gap-2 text-center text-white bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/20">
            <AlertCircle className="w-8 h-8 text-primary" />
            <p className="text-xs font-semibold">{title}</p>
            <p className="text-[11px] text-white/70">Toque para reproduzir</p>
          </div>
        </div>
      )}

      {/* Play Button Overlay when video is paused */}
      {!isPlaying && !hasError && (
        <div
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors cursor-pointer z-10"
        >
          <button
            type="button"
            onClick={handlePlayClick}
            aria-label="Reproduzir vídeo"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg shadow-primary/40 transform group-hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
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


