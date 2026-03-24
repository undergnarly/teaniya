"use client";

import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  video?: string;
  poster: string;
  active: boolean;
  onReady?: () => void;
  overlayStyle?: "dark" | "forest" | "warm";
}

export default function VideoBackground({
  video,
  poster,
  active,
  onReady,
  overlayStyle = "dark",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(!!video);

  useEffect(() => {
    if (active && !mounted) setMounted(true);
  }, [active, mounted]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (active) {
      v.play().catch(() => {});
      const watchdog = setInterval(() => {
        if (v.paused && active) v.play().catch(() => {});
      }, 300);
      return () => clearInterval(watchdog);
    } else {
      v.pause();
    }
  }, [active, mounted]);

  // Fire onReady immediately if no video, or wait for canplay/timeout
  useEffect(() => {
    if (!onReady) return;

    if (!video) {
      onReady();
      return;
    }

    const v = videoRef.current;
    if (!v) return;

    const handle = () => onReady();
    v.addEventListener("canplay", handle, { once: true });

    const fallback = setTimeout(handle, 5000);
    return () => {
      v.removeEventListener("canplay", handle);
      clearTimeout(fallback);
    };
  }, [mounted, onReady, video]);

  const overlayClass =
    overlayStyle === "forest"
      ? "overlay-forest"
      : overlayStyle === "warm"
        ? "overlay-warm"
        : "overlay-dark";

  return (
    <div className="video-bg">
      {/* Poster (always visible as base layer) */}
      <img
        src={poster}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Video */}
      {video && mounted && (
        <video
          ref={videoRef}
          src={video}
          poster={poster}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />
    </div>
  );
}
