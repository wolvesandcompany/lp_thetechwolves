"use client";

/**
 * Lightweight 3D ambient hero backdrop for the AI Agency template.
 *
 * A single distorted icosahedron with a slow auto-rotation + subtle
 * mouse parallax. Kept intentionally cheap: one mesh, low poly detail,
 * capped dpr, and disabled entirely under prefers-reduced-motion.
 */

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import type { Mesh } from "three";

/** Catches WebGL/THREE render failures (e.g. GPU-less environments) → fallback. */
class GLBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

/** Detect WebGL support so we can fall back gracefully on GPU-less environments. */
function useWebGL() {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setOk(!!gl);
    } catch {
      setOk(false);
    }
  }, []);
  return ok;
}

function Orb() {
  const mesh = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.z += delta * 0.04;
    // gentle mouse parallax
    mesh.current.position.x += (state.pointer.x * 0.4 - mesh.current.position.x) * 0.03;
    mesh.current.position.y += (state.pointer.y * 0.25 - mesh.current.position.y) * 0.03;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh} scale={2.3}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#4C1D95"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.6}
          distort={0.4}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

/** CSS-only fallback: a soft animated gradient orb for reduced-motion or no-WebGL. */
function OrbFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div
        className="h-72 w-72 rounded-full opacity-70 blur-2xl sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #ec4899, #7c3aed 45%, transparent 70%)",
          animation: "tplOrbFloat 8s ease-in-out infinite",
        }}
      />
      <style>{`@keyframes tplOrbFloat{0%,100%{transform:translateY(-12px) scale(1)}50%{transform:translateY(12px) scale(1.05)}}`}</style>
    </div>
  );
}

export default function Ambient3D() {
  const reduced = useReducedMotion();
  const webgl = useWebGL();
  if (reduced) return null;
  if (webgl === false) return <OrbFallback />;
  if (webgl === null) return null; // still probing — avoid flash
  return (
    <GLBoundary fallback={<OrbFallback />}>
      <Canvas
        className="!absolute inset-0"
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onError={() => {
          /* swallow – boundary handles fallback */
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} color="#EC4899" />
        <directionalLight position={[-4, -2, 2]} intensity={0.8} color="#6366F1" />
        <Orb />
      </Canvas>
    </GLBoundary>
  );
}
