"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;

  vx: number;
  vy: number;

  life: number;
  maxLife: number;

  size: number;

  hue: number;
};

export default function GoldSparkles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let animationFrame = 0;
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    let isScrolling = false;
    let lastSpawn = 0;

    const particles: Particle[] = [];

    /* -----------------------------------------
       CANVAS SIZE
    ----------------------------------------- */

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    /* -----------------------------------------
       CREATE ONE SPARK
    ----------------------------------------- */

    const createSpark = (
      sourceX: number,
      sourceY: number,
      direction: "left" | "right"
    ) => {
      /*
       * Left source mainly fires RIGHT.
       * Right source mainly fires LEFT.
       */

      const baseAngle =
        direction === "right"
          ? 0
          : Math.PI;

      const spread =
        (Math.random() - 0.5) * 2.3;

      const angle = baseAngle + spread;

      const speed =
        Math.random() * 5 + 2;

      particles.push({
        x: sourceX,
        y: sourceY,

        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,

        life: 0,

        maxLife:
          Math.random() * 25 + 22,

        size:
          Math.random() * 1.7 + 0.6,

        hue:
          Math.random() * 18 + 38,
      });
    };

    /* -----------------------------------------
       CREATE SPARKLER BURST
    ----------------------------------------- */

    const createBurst = () => {
      /*
       * LEFT = slightly DOWN
       * RIGHT = slightly UP
       */

      const leftSource = {
        x: 8,
        y: height * 0.68,
      };

      const rightSource = {
        x: width - 8,
        y: height * 0.32,
      };

      /*
       * Small controlled number of particles.
       * Keeps the effect smooth.
       */

      const sparksPerSide = 5;

      for (let i = 0; i < sparksPerSide; i++) {
        createSpark(
          leftSource.x,
          leftSource.y,
          "right"
        );

        createSpark(
          rightSource.x,
          rightSource.y,
          "left"
        );
      }
    };

    /* -----------------------------------------
       SCROLL ACTIVATION
    ----------------------------------------- */

    const handleScroll = () => {
      isScrolling = true;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      /*
       * Sparkler continues very briefly
       * after scrolling stops.
       */

      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 180);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    /* -----------------------------------------
       ANIMATION
    ----------------------------------------- */

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      /*
       * Generate sparks while scrolling.
       *
       * ~45ms prevents excessive particle creation.
       */

      if (
        isScrolling &&
        time - lastSpawn > 45
      ) {
        createBurst();

        lastSpawn = time;
      }

      /* -------------------------------------
         DRAW PARTICLES
      ------------------------------------- */

      for (
        let i = particles.length - 1;
        i >= 0;
        i--
      ) {
        const particle = particles[i];

        particle.life++;

        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        /*
         * Previous position is used
         * to create the spark trail.
         */

        const previousX = particle.x;
        const previousY = particle.y;

        particle.x += particle.vx;
        particle.y += particle.vy;

        /*
         * Slight gravity.
         */

        particle.vy += 0.045;

        /*
         * Slow the spark naturally.
         */

        particle.vx *= 0.985;
        particle.vy *= 0.985;

        const progress =
          particle.life / particle.maxLife;

        const opacity =
          1 - progress;

        /*
         * Random flicker.
         */

        const flicker =
          Math.random() > 0.18
            ? opacity
            : opacity * 0.3;

        /* -----------------------------------
           SPARK TRAIL
        ----------------------------------- */

        ctx.beginPath();

        ctx.moveTo(
          previousX,
          previousY
        );

        ctx.lineTo(
          particle.x,
          particle.y
        );

        const gradient =
          ctx.createLinearGradient(
            previousX,
            previousY,
            particle.x,
            particle.y
          );

        gradient.addColorStop(
          0,
          `hsla(${particle.hue}, 95%, 72%, 0)`
        );

        gradient.addColorStop(
          1,
          `hsla(${particle.hue}, 100%, 75%, ${flicker})`
        );

        ctx.strokeStyle = gradient;

        ctx.lineWidth =
          particle.size;

        ctx.lineCap = "round";

        ctx.stroke();

        /* -----------------------------------
           WHITE HOT PARTICLE HEAD
        ----------------------------------- */

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          Math.max(
            0.45,
            particle.size * (1 - progress * 0.5)
          ),
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(255, 248, 210, ${flicker})`;

        ctx.shadowBlur = 8;

        ctx.shadowColor =
          "rgba(212, 175, 55, 0.9)";

        ctx.fill();

        ctx.shadowBlur = 0;
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    /* -----------------------------------------
       CLEANUP
    ----------------------------------------- */

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[5]
      "
    />
  );
}