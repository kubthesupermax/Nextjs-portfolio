"use client";

import React, { useEffect, useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  let translateValue = "translate-y-10";
  if (direction === "down") translateValue = "-translate-y-10";
  if (direction === "left") translateValue = "translate-x-10";
  if (direction === "right") translateValue = "-translate-x-10";

  return (
    <div
      ref={ref}
      className={`opacity-0 ${translateValue} transition-all duration-700 ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <FadeIn key={index} delay={index * staggerDelay}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
}

export function FloatingAnimation({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`animate-floating ${className}`}>{children}</div>;
}

export function PulseAnimation({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`animate-pulse-slow ${className}`}>{children}</div>;
}
