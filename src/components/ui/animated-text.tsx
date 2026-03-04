"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  /** "words" splits by word, "lines" animates line by line, "chars" by character */
  splitBy?: "words" | "lines" | "chars";
  once?: boolean;
}

export function AnimatedText({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
  splitBy = "words",
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const items =
    splitBy === "words"
      ? children.split(" ")
      : splitBy === "chars"
      ? children.split("")
      : children.split("\n");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === "chars" ? 0.02 : 0.06,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      rotateX: 40,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="overflow-hidden"
      style={{ perspective: "800px" }}
    >
      <Tag className={className}>
        {items.map((item, i) => (
          <motion.span
            key={i}
            variants={itemVariants}
            className="inline-block"
            style={{ willChange: "transform, opacity" }}
          >
            {item}
            {splitBy === "words" && i < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  distance?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  once = true,
  distance = 40,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-8% 0px -8% 0px" });

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionMap[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionMap[direction] }
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delay = 0,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px -5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxWrap({
  children,
  className = "",
  speed = 0.3,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}

interface CountUpProps {
  end: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function CountUp({
  end,
  suffix = "",
  className = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CountUpNumber end={end} duration={duration} />
          {suffix}
        </motion.span>
      ) : (
        `0${suffix}`
      )}
    </motion.span>
  );
}

function CountUpNumber({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
}
