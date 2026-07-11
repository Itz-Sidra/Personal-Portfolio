import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 90;

function Nodes() {
  const groupRef = useRef();
  const pointsRef = useRef();
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  // Sparse edges between nearby nodes, computed once — reads like a faint
  // ML graph rather than a generic particle burst.
  const edgePositions = useMemo(() => {
    const pts = [];
    const maxDist = 2.1;
    for (let i = 0; i < COUNT; i++) {
      const ax = positions[i * 3], ay = positions[i * 3 + 1], az = positions[i * 3 + 2];
      let links = 0;
      for (let j = i + 1; j < COUNT && links < 2; j++) {
        const bx = positions[j * 3], by = positions[j * 3 + 1], bz = positions[j * 3 + 2];
        const d = Math.hypot(ax - bx, ay - by, az - bz);
        if (d < maxDist) {
          pts.push(ax, ay, az, bx, by, bz);
          links++;
        }
      }
    }
    return new Float32Array(pts);
  }, [positions]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.015;
      const targetX = (state.pointer.x * viewport.width) / 60;
      const targetY = (state.pointer.y * viewport.height) / 60;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.02;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#B85C2E" size={0.045} sizeAttenuation transparent opacity={0.55} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#2F4B3C" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export default function NodeField({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <Nodes />
      </Canvas>
    </div>
  );
}
