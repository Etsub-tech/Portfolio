import { useEffect, useRef } from "react";
import "./device-mockup.css";

// Resting tilt so the device reads as 3D even before the cursor moves.
const BASE_RX = 8;
const BASE_RY = -20;
const MAX_DELTA_X = 10;
const MAX_DELTA_Y = 16;

function DeviceMockup() {
  const sceneRef = useRef(null);
  const deviceRef = useRef(null);
  const stateRef = useRef({
    targetX: BASE_RX,
    targetY: BASE_RY,
    currentX: BASE_RX,
    currentY: BASE_RY,
  });
  const frameRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const device = deviceRef.current;
    if (!scene || !device) return;

    const isDesktop = window.matchMedia("(min-width: 901px)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Static, on-brand pose for touch devices / reduced-motion users.
    if (!isDesktop || reduceMotion) {
      device.style.transform = `rotateX(${BASE_RX}deg) rotateY(${BASE_RY}deg)`;
      return;
    }

    const state = stateRef.current;

    const handleMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = (e.clientX - cx) / (rect.width / 2 || 1);
      const dy = (e.clientY - cy) / (rect.height / 2 || 1);

      const clampedX = Math.max(-1, Math.min(1, dx));
      const clampedY = Math.max(-1, Math.min(1, dy));

      state.targetY = BASE_RY + clampedX * MAX_DELTA_Y;
      state.targetX = BASE_RX - clampedY * MAX_DELTA_X;
    };

    const handleLeave = () => {
      state.targetX = BASE_RX;
      state.targetY = BASE_RY;
    };

    const animate = () => {
      state.currentX += (state.targetX - state.currentX) * 0.07;
      state.currentY += (state.targetY - state.currentY) * 0.07;
      device.style.transform = `rotateX(${state.currentX}deg) rotateY(${state.currentY}deg)`;
      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="device-scene" ref={sceneRef} aria-hidden="true">
      <div className="device" ref={deviceRef}>
        <div className="device-stand" />
        <div className="device-shadow" />

        <div className="device-body">
          <div className="device-edge" />
          <div className="device-screen">
            <div className="device-glow" />
            <div className="device-topbar">
              <span className="device-dot device-dot--a" />
              <span className="device-dot device-dot--b" />
              <span className="device-dot device-dot--c" />
            </div>

            <div className="device-line device-line--1" />
            <div className="device-line device-line--2" />
            <div className="device-line device-line--3" />
            <div className="device-line device-line--4" />

            <div className="device-chip device-chip--tag">{"</>"}</div>
            <div className="device-chip device-chip--cursor">
              <svg viewBox="0 0 20 20" width="13" height="13" fill="none">
                <path d="M2 2l6.2 15 2.4-6.4L17 8.2 2 2z" fill="currentColor" />
              </svg>
            </div>
            <div className="device-chip device-chip--dial" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceMockup;
