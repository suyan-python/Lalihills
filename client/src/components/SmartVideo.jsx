import { useEffect, useRef } from "react";

const SmartVideo = ({ src, poster, className, priority = false, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const play = () => {
      video.play().catch(() => {});
    };

    if (priority || !("IntersectionObserver" in window)) {
      play();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          video.pause();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [priority]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload={priority ? "metadata" : "none"}
      poster={poster}
      className={className}
      {...props}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default SmartVideo;
