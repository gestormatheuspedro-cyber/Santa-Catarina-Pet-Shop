import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

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

function resolveVideoSources(url: string): { directUrls: string[]; driveId: string | null } {
  const driveId = extractDriveId(url);
  if (driveId) {
    return {
      directUrls: [
        `/api/video/${driveId}`,
        `https://drive.usercontent.google.com/download?id=${driveId}&export=download`,
        `https://drive.google.com/uc?export=download&id=${driveId}`,
      ],
      driveId,
    };
  }
  return {
    directUrls: [url],
    driveId: null,
  };
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default function VideoPlayer({
  videoUrl,
  posterUrl,
  title,
  ariaLabel,
  aspectRatio = "9:16",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 || "ontouchstart" in window;
    }
    return false;
  });
  const [showControls, setShowControls] = useState(true);

  const { directUrls, driveId } = resolveVideoSources(videoUrl);
  const currentDirectUrl = directUrls[sourceIndex] || directUrls[0];
  const effectivePosterUrl = posterUrl || (driveId ? `https://lh3.googleusercontent.com/d/${driveId}` : undefined);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setSourceIndex(0);
    setHasError(false);
    setIsPlaying(false);
    setCurrentTime(0);
  }, [videoUrl]);

  // Auto-hide mobile controls when playing after 3s
  useEffect(() => {
    if (!isPlaying || !isMobile) {
      setShowControls(true);
      return;
    }
    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isPlaying, isMobile, currentTime]);

  const handleVideoError = () => {
    if (sourceIndex < directUrls.length - 1) {
      setSourceIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const togglePlay = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (!videoRef.current) return;

    if (hasError) {
      setHasError(false);
      setSourceIndex(0);
      videoRef.current.load();
    }

    if (videoRef.current.paused || videoRef.current.ended) {
      if (videoRef.current.ended) {
        videoRef.current.currentTime = 0;
      }
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowControls(true);
          })
          .catch((err) => {
            console.warn("Play failed, retrying muted:", err);
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            }
          });
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clientX = "touches" in e && e.touches.length > 0 ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const newTime = pos * (videoRef.current.duration || 0);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      onClick={() => {
        if (isMobile) {
          if (!isPlaying) {
            togglePlay();
          } else {
            setShowControls((prev) => !prev);
          }
        }
      }}
      className={`relative w-full mx-auto overflow-hidden shadow-2xl border border-border-light/40 bg-black rounded-2xl group select-none touch-manipulation ${
        aspectRatio === "9:16"
          ? "aspect-[9/16] max-w-[340px] sm:max-w-[380px]"
          : aspectRatio === "16:9"
          ? "aspect-video w-full"
          : "w-full h-auto"
      }`}
    >
      <video
        ref={videoRef}
        src={currentDirectUrl}
        poster={effectivePosterUrl}
        controls={!isMobile}
        controlsList="nodownload"
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        aria-label={ariaLabel || title}
        onPlay={() => setIsPlaying(true)}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onError={handleVideoError}
        className="w-full h-full object-cover rounded-[inherit] block focus:outline-none touch-auto cursor-pointer"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* MOBILE CUSTOM CONTROLS ONLY */}
      {isMobile && (
        <>
          {/* Central Play Button Overlay (when paused or when controls active) */}
          {(!isPlaying || showControls || hasError) && (
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-black/25 backdrop-blur-[1px] transition-opacity duration-300 z-10 ${
                !isPlaying || showControls || hasError ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
            >
              {!hasError ? (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                  className="w-14 h-14 rounded-full bg-primary/90 hover:bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 transform active:scale-90 transition-all duration-200 focus:outline-none cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause size={24} className="fill-current" />
                  ) : (
                    <Play size={24} className="fill-current ml-1" />
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs shadow-lg transition-all"
                >
                  <RotateCcw size={16} />
                  <span>Tentar recarregar vídeo</span>
                </button>
              )}
            </div>
          )}

          {/* Discreet Mobile Bottom Bar: Play/Pause button + Discrete Progress bar + Time */}
          <div
            className={`absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center gap-2.5 z-20 transition-opacity duration-300 ${
              showControls || !isPlaying ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center shrink-0 active:scale-95 transition-all cursor-pointer"
            >
              {isPlaying ? (
                <Pause size={16} className="fill-current" />
              ) : (
                <Play size={16} className="fill-current ml-0.5" />
              )}
            </button>

            {/* Discrete Thin Progress Bar */}
            <div
              ref={progressBarRef}
              onClick={handleSeek}
              onTouchStart={handleSeek}
              className="relative flex-1 h-4 flex items-center cursor-pointer py-1"
            >
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm relative">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-75"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Time indicator */}
            {duration > 0 && (
              <span className="text-[10px] text-white/90 font-mono tracking-tight shrink-0 select-none">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            )}
          </div>
        </>
      )}

      {/* DESKTOP OVERLAY (when paused) */}
      {!isMobile && !isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 backdrop-blur-[1px] transition-all duration-300 z-10 opacity-100 pointer-events-auto cursor-pointer"
        >
          {!hasError ? (
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Reproduzir vídeo"
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg shadow-primary/40 transform active:scale-90 hover:scale-105 transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <Play size={30} className="fill-current ml-1" />
            </button>
          ) : (
            <button
              type="button"
              onClick={togglePlay}
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





