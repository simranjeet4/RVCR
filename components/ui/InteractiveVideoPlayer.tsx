'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Maximize2, Volume2, VolumeX } from 'lucide-react';

interface InteractiveVideoPlayerProps {
  src: string;
  title?: string;
  caption?: string;
  poster?: string;
  className?: string;
}

export const InteractiveVideoPlayer: React.FC<InteractiveVideoPlayerProps> = ({
  src,
  title,
  caption,
  poster,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      setHasStarted(true);
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setHasStarted(true);
    videoRef.current.play();
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <figure
      className={`bg-white border border-[#e8e7ef] rounded-2xl overflow-hidden shadow-sm flex flex-col group ${className}`}
    >
      {title && (
        <div className="px-5 py-3.5 bg-[#f8fafc] border-b border-[#e8e7ef] flex items-center justify-between">
          <h4 className="text-sm font-bold text-[#003461] tracking-wide truncate">{title}</h4>
          <span className="text-[10px] font-roboto uppercase bg-[#96337b]/10 text-[#96337b] px-2.5 py-0.5 rounded border border-[#96337b]/20 font-bold">
            3D Simulation
          </span>
        </div>
      )}

      {/* Fixed aspect-ratio container prevents CLS */}
      <div className="relative group/player bg-slate-950 aspect-video flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          muted={isMuted}
          onPlay={() => {
            setIsPlaying(true);
            setHasStarted(true);
          }}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-contain"
          // preload="none" saves 100% initial bandwidth for LCP and critical CSS
          preload="none"
        />

        {/* Big Center Play Button Before Playback Starts */}
        {!hasStarted && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label={`Start 3D simulation: ${title || 'Video'}`}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group-hover/player:scale-105"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-[#003461] flex items-center justify-center shadow-2xl transition-all transform hover:scale-110">
              <Play className="w-7 h-7 translate-x-0.5 fill-[#003461]" />
            </div>
            <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/90 drop-shadow">
              Play 3D Simulation
            </span>
          </button>
        )}

        {/* Hover / Active Controls Bar */}
        {hasStarted && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/player:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 pointer-events-none">
            <div className="flex items-center justify-between text-white pointer-events-auto">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button
                  type="button"
                  onClick={restartVideo}
                  aria-label="Restart simulation"
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label="View simulation fullscreen"
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="px-4 py-3 bg-[#f8fafc] border-t border-[#e8e7ef] text-xs text-slate-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
