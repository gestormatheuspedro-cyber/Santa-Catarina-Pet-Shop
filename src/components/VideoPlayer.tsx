import React from "react";

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
  return (
    <div 
      className={`relative w-full h-full overflow-hidden shadow-xl border border-border-light bg-black rounded-2xl group ${
        aspectRatio === "9:16" ? "aspect-[9/16]" : aspectRatio === "16:9" ? "aspect-video" : ""
      }`}
    >
      <video
        src={videoUrl}
        poster={posterUrl}
        controls
        controlsList="nodownload"
        autoPlay={false}
        loop={false}
        muted={false}
        playsInline
        preload="metadata"
        aria-label={ariaLabel || title}
        className="w-full h-full object-cover rounded-[inherit] block focus:outline-none focus:ring-2 focus:ring-primary pointer-events-auto cursor-pointer"
        style={{
          pointerEvents: "auto",
          cursor: "pointer",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Top Title Badge */}
      {title && (
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-sans font-medium tracking-wide uppercase pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-100">
          {title}
        </div>
      )}
    </div>
  );
}

