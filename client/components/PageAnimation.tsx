import React, { useEffect, useState } from "react";

interface PageAnimationProps {
  children: React.ReactNode;
  className?: string;
}

const PageAnimation: React.FC<PageAnimationProps> = ({
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default PageAnimation;
