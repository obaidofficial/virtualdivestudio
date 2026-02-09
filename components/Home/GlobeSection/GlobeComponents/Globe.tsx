"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleProps } from "./types";

const Globe: React.FC<ParticleProps> = ({ count = 6000, radius = 3.5 }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const hasInteracted = useRef(false);
  const { mouse, viewport } = useThree();
  const [shapeIndex, setShapeIndex] = useState(0);

  // Shape Cycling Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setShapeIndex((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Generate All Target Shapes
  const allTargets = useMemo(() => {
    const targets = [
      new Float32Array(count * 3), // 0: Globe (Surface Shell)
      new Float32Array(count * 3), // 1: Gamepad Outline
      new Float32Array(count * 3), // 2: House Outline
      new Float32Array(count * 3), // 3: Unity Logo Outline
    ];

    const colorArray = new Float32Array(count * 3);
    const color1 = new THREE.Color("#ef41de"); // Magenta/Pink
    const color2 = new THREE.Color("#ffffff"); // White
    const color3 = new THREE.Color("#510136"); // Deep Purple

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // --- 0. GLOBE (Surface Shell) ---
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      targets[0][i3] = radius * Math.cos(theta) * Math.sin(phi);
      targets[0][i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      targets[0][i3 + 2] = radius * Math.cos(phi);

      // --- 1. GAMEPAD OUTLINE ---
      if (i < count * 0.45) {
        // Chassis Box Edges
        const bw = 5.0,
          bh = 2.4,
          bd = 0.6;
        const edgeIdx = Math.floor(Math.random() * 12);
        const t = Math.random() - 0.5;
        if (edgeIdx < 4) {
          targets[1][i3] = t * bw;
          targets[1][i3 + 1] = (edgeIdx % 2 === 0 ? 0.5 : -0.5) * bh;
          targets[1][i3 + 2] = (edgeIdx < 2 ? 0.5 : -0.5) * bd;
        } else if (edgeIdx < 8) {
          targets[1][i3] = (edgeIdx % 2 === 0 ? 0.5 : -0.5) * bw;
          targets[1][i3 + 1] = t * bh;
          targets[1][i3 + 2] = (edgeIdx < 6 ? 0.5 : -0.5) * bd;
        } else {
          targets[1][i3] = (edgeIdx % 2 === 0 ? 0.5 : -0.5) * bw;
          targets[1][i3 + 1] = (edgeIdx < 10 ? 0.5 : -0.5) * bh;
          targets[1][i3 + 2] = t * bd;
        }
      } else if (i < count * 0.65) {
        // Screen Outline
        const sw = 1.4,
          sh = 1.8;
        const edgeIdx = Math.floor(Math.random() * 4);
        const t = Math.random() - 0.5;
        targets[1][i3 + 2] = 0.31;
        if (edgeIdx < 2) {
          targets[1][i3] = t * sw;
          targets[1][i3 + 1] = (edgeIdx === 0 ? 0.5 : -0.5) * sh;
        } else {
          targets[1][i3] = (edgeIdx === 2 ? 0.5 : -0.5) * sw;
          targets[1][i3 + 1] = t * sh;
        }
      } else if (i < count * 0.85) {
        // D-pad Outline
        const dS = 0.35,
          dW = 0.25;
        const seg = Math.floor(Math.random() * 12);
        const t = Math.random();
        const pts = [
          [-dW / 2, dS + dW / 2],
          [dW / 2, dS + dW / 2],
          [dW / 2, dW / 2],
          [dS + dW / 2, dW / 2],
          [dS + dW / 2, -dW / 2],
          [dW / 2, -dW / 2],
          [dW / 2, -dS - dW / 2],
          [-dW / 2, -dS - dW / 2],
          [-dW / 2, -dW / 2],
          [-dS - dW / 2, -dW / 2],
          [-dS - dW / 2, dW / 2],
          [-dW / 2, dW / 2],
        ];
        const p1 = pts[seg],
          p2 = pts[(seg + 1) % 12];
        targets[1][i3] = -1.6 + p1[0] + (p2[0] - p1[0]) * t;
        targets[1][i3 + 1] = p1[1] + (p2[1] - p1[1]) * t;
        targets[1][i3 + 2] = 0.32;
      } else {
        // Buttons Outline
        const btnIdx = i % 4;
        const btnPos = [
          [1.6, 0.4],
          [1.6, -0.4],
          [1.2, 0],
          [2.0, 0],
        ];
        const [bx, by] = btnPos[btnIdx];
        const r = 0.18,
          ang = Math.random() * Math.PI * 2;
        targets[1][i3] = bx + Math.cos(ang) * r;
        targets[1][i3 + 1] = by + Math.sin(ang) * r;
        targets[1][i3 + 2] = 0.32;
      }

      // --- 2. HOUSE OUTLINE ---
      if (i < count * 0.6) {
        const w = 3.8,
          h = 2.5,
          d = 2.4;
        const edgeIdx = Math.floor(Math.random() * 12);
        const t = Math.random() - 0.5;
        const yOffset = -1.0;
        if (edgeIdx < 4) {
          targets[2][i3] = t * w;
          targets[2][i3 + 1] = (edgeIdx % 2 === 0 ? 0.5 : -0.5) * h + yOffset;
          targets[2][i3 + 2] = (edgeIdx < 2 ? 0.5 : -0.5) * d;
        } else if (edgeIdx < 8) {
          targets[2][i3] = (edgeIdx % 2 === 0 ? 0.5 : -0.5) * w;
          targets[2][i3 + 1] = t * h + yOffset;
          targets[2][i3 + 2] = (edgeIdx < 6 ? 0.5 : -0.5) * d;
        } else {
          targets[2][i3] = (edgeIdx % 2 === 0 ? 0.5 : -0.5) * w;
          targets[2][i3 + 1] = (edgeIdx < 10 ? 0.5 : -0.5) * h + yOffset;
          targets[2][i3 + 2] = t * d;
        }
      } else {
        const rw = 4.2,
          rh = 2.2,
          rd = 2.6;
        const rBaseY = 0.25;
        const edgeIdx = Math.floor(Math.random() * 6);
        const t = Math.random();
        if (edgeIdx === 0) {
          targets[2][i3] = 0;
          targets[2][i3 + 1] = rBaseY + rh;
          targets[2][i3 + 2] = (t - 0.5) * rd;
        } else if (edgeIdx < 3) {
          const side = edgeIdx === 1 ? -1 : 1;
          targets[2][i3] = t * (rw / 2) * side;
          targets[2][i3 + 1] = rBaseY + (1 - t) * rh;
          targets[2][i3 + 2] = rd / 2;
        } else if (edgeIdx < 5) {
          const side = edgeIdx === 3 ? -1 : 1;
          targets[2][i3] = t * (rw / 2) * side;
          targets[2][i3 + 1] = rBaseY + (1 - t) * rh;
          targets[2][i3 + 2] = -rd / 2;
        } else {
          targets[2][i3] = (Math.random() > 0.5 ? 0.5 : -0.5) * rw;
          targets[2][i3 + 1] = rBaseY;
          targets[2][i3 + 2] = (t - 0.5) * rd;
        }
      }

      // --- 3. UNITY LOGO OUTLINE ---
      const segIdx = i % 24;
      const cornerIdx = Math.floor(segIdx / 3);
      const legIdx = segIdx % 3;
      const cx = cornerIdx & 1 ? 1 : -1,
        cy = cornerIdx & 2 ? 1 : -1,
        cz = cornerIdx & 4 ? 1 : -1;
      const scale = 1.6,
        legL = 0.8;
      const t = Math.random();
      const pos = 1.0 - t * legL;
      if (legIdx === 0) {
        targets[3][i3] = pos * cx;
        targets[3][i3 + 1] = cy;
        targets[3][i3 + 2] = cz;
      } else if (legIdx === 1) {
        targets[3][i3] = cx;
        targets[3][i3 + 1] = pos * cy;
        targets[3][i3 + 2] = cz;
      } else {
        targets[3][i3] = cx;
        targets[3][i3 + 1] = cy;
        targets[3][i3 + 2] = pos * cz;
      }
      targets[3][i3] *= scale;
      targets[3][i3 + 1] *= scale;
      targets[3][i3 + 2] *= scale;

      // --- Colors Distribution ---
      // Original: Pink (30% @ >0.7), White (40% @ 0.3-0.7), Purple (30% @ <0.3)
      // New: Pink +40% relative (30 * 1.4 = 42%), White -40% relative (40 * 0.6 = 24%)
      // Remaining: Purple (100 - 42 - 24 = 34%)
      const rand = Math.random();
      const finalColor = rand > 0.58 ? color1 : rand > 0.34 ? color2 : color3;
      colorArray[i3] = finalColor.r;
      colorArray[i3 + 1] = finalColor.g;
      colorArray[i3 + 2] = finalColor.b;
    }

    return { targets, colors: colorArray };
  }, [count, radius]);

  // Initial positions
  const [positions] = useMemo(() => {
    return [new Float32Array(allTargets.targets[0])];
  }, [allTargets]);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();

    if (!hasInteracted.current && (mouse.x !== 0 || mouse.y !== 0)) {
      hasInteracted.current = true;
    }

    const targetX = (mouse.x * viewport.width) / 2;
    const targetY = (mouse.y * viewport.height) / 2;

    const positionsAttr = pointsRef.current.geometry.attributes.position;
    const posArr = positionsAttr.array as Float32Array;
    const currentTargets = allTargets.targets[shapeIndex];

    // Auto-rotation logic
    if (shapeIndex === 3) {
      pointsRef.current.rotation.y = Math.sin(time * 0.15) * 0.2 + 0.5;
      pointsRef.current.rotation.x = Math.cos(time * 0.15) * 0.1 + 0.4;
    } else if (shapeIndex === 1 || shapeIndex === 2) {
      pointsRef.current.rotation.y = Math.sin(time * 0.12) * 0.2;
      pointsRef.current.rotation.x = Math.cos(time * 0.12) * 0.1;
    } else {
      pointsRef.current.rotation.y += 0.002;
      pointsRef.current.rotation.x = 0;
    }

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      let x = posArr[i3];
      let y = posArr[i3 + 1];
      let z = posArr[i3 + 2];

      const tx = currentTargets[i3];
      const ty = currentTargets[i3 + 1];
      const tz = currentTargets[i3 + 2];

      const dx = targetX - x;
      const dy = targetY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const repelDist = 2.5;
      let force = 0;
      if (hasInteracted.current && dist < repelDist) {
        force = Math.max(0, (repelDist - dist) / repelDist);
      }

      const morphSpeed = 0.08;
      x += (tx - x) * morphSpeed;
      y += (ty - y) * morphSpeed;
      z += (tz - z) * morphSpeed;

      if (force > 0) {
        x -= dx * force * 0.4;
        y -= dy * force * 0.4;
      }

      const floatAmt = 0.0012;
      x += Math.sin(time * 0.4 + i) * floatAmt;
      y += Math.cos(time * 0.4 + i) * floatAmt;

      posArr[i3] = x;
      posArr[i3 + 1] = y;
      posArr[i3 + 2] = z;
    }

    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[positions, 3]}
          count={allTargets.colors.length / 3}
          array={allTargets.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Globe;
