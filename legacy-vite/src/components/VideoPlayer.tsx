import React, { useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  title?: string;
  caption?: string;
  className?: string;
  autoPlay?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  caption,
  className = '',
  autoPlay = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className={`bg-white border border-[#e8e7ef] rounded-2xl overflow-hidden shadow-sm flex flex-col ${className}`}>
      {title && (
        <div className="px-5 py-3.5 bg-[#f8fafc] border-b border-[#e8e7ef] flex items-center justify-between">
          <h4 className="text-sm font-bold text-[#003461] tracking-wide truncate">{title}</h4>
          <span className="text-[10px] font-roboto uppercase bg-[#96337b]/10 text-[#96337b] px-2.5 py-0.5 rounded border border-[#96337b]/20 font-bold">
            3D Simulation
          </span>
        </div>
      )}

      <div className="relative group bg-black aspect-video flex items-center justify-center">
        <video
          ref={videoRef}
          src={src}
          loop
          muted={isMuted}
          autoPlay={autoPlay}
          playsInline
          className="w-full h-full object-contain"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={togglePlay}
              className="p-2 rounded-lg bg-white/90 text-[#003461] hover:bg-[#96337b] hover:text-white transition-colors shadow-sm"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={restartVideo}
              className="p-2 rounded-lg bg-white/90 text-[#003461] hover:bg-[#96337b] hover:text-white transition-colors shadow-sm"
              title="Restart"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="pointer-events-auto">
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-white/90 text-[#003461] hover:bg-[#96337b] hover:text-white transition-colors shadow-sm"
              title="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {caption && (
        <div className="p-4 bg-white border-t border-[#e8e7ef] text-xs text-[#334155] leading-relaxed">
          {caption}
        </div>
      )}
    </div>
  );
};
