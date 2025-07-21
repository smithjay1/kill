import React, { useState, useEffect, useRef } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  formatNumber?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
  className = "",
  prefix = "",
  suffix = "",
  formatNumber = true,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startAnimation();
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  const startAnimation = () => {
    const startTime = performance.now();
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic function
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        startValue + (endValue - startValue) * easeOut,
      );
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const formatDisplayValue = (num: number): string => {
    if (!formatNumber) return num.toString();

    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toLocaleString();
  };

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatDisplayValue(displayValue)}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
