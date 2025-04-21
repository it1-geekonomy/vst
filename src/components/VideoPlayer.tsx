import React from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  containerClassName?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  className = "w-full h-full object-cover max-w-[400px] md:max-w-none",
  containerClassName = "w-full md:w-1/2 flex justify-center md:justify-end"
}) => {
  return (
    <div className={containerClassName}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={className}
      />
    </div>
  );
};

export default VideoPlayer; 