"use client";
import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleProps } from "./types";

const Globe: React.FC<ParticleProps> = ({ count = 6000, radius = 2.4 }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const hasInteracted = useRef(false);
  const { mouse, viewport } = useThree();

  // Create particles distributed on a sphere
  const [positions, initialPositions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initPos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const color1 = new THREE.Color("#ef41de");
    const color2 = new THREE.Color("#ffffff");
    const color3 = new THREE.Color("#510136");

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution for even spacing
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initPos[i * 3] = x;
      initPos[i * 3 + 1] = y;
      initPos[i * 3 + 2] = z;

      // Randomly assign one of our palette colors
      const rand = Math.random();
      const finalColor = rand > 0.7 ? color1 : rand > 0.3 ? color2 : color3;

      cols[i * 3] = finalColor.r;
      cols[i * 3 + 1] = finalColor.g;
      cols[i * 3 + 2] = finalColor.b;
    }

    return [pos, initPos, cols];
  }, [count, radius]);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();

    // Check if user has actually moved the mouse
    if (!hasInteracted.current && (mouse.x !== 0 || mouse.y !== 0)) {
      hasInteracted.current = true;
    }

    const targetX = (mouse.x * viewport.width) / 2;
    const targetY = (mouse.y * viewport.height) / 2;

    const positionsAttr = pointsRef.current.geometry.attributes.position;
    const positions = positionsAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      let x = positions[i3];
      let y = positions[i3 + 1];
      let z = positions[i3 + 2];

      const ox = initialPositions[i3];
      const oy = initialPositions[i3 + 1];
      const oz = initialPositions[i3 + 2];

      const dx = targetX - x;
      const dy = targetY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const repelDist = 1.2;
      let force = 0;
      if (hasInteracted.current && dist < repelDist) {
        force = Math.max(0, (repelDist - dist) / repelDist);
      }

      const elasticity = 0.05;
      x += (ox - x) * elasticity;
      y += (oy - y) * elasticity;
      z += (oz - z) * elasticity;

      if (force > 0) {
        x -= dx * force * 0.15;
        y -= dy * force * 0.15;
      }

      x += Math.sin(time * 0.5 + i) * 0.002;
      y += Math.cos(time * 0.5 + i) * 0.002;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
    }

    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Globe;
