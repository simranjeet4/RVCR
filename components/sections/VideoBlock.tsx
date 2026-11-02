import React from 'react';
import { InteractiveVideoPlayer } from '../ui/InteractiveVideoPlayer';

interface VideoBlockProps {
  src: string;
  title?: string;
  caption?: string;
  poster?: string;
  className?: string;
}

export const VideoBlock: React.FC<VideoBlockProps> = (props) => {
  return <InteractiveVideoPlayer {...props} />;
};
