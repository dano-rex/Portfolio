import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Starfield() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate random points in a sphere - reduced count for performance
  const [positions, colors] = useMemo(() => {
    const pointsCount = 1500;
    const positions = new Float32Array(pointsCount * 3);
    const colors = new Float32Array(pointsCount * 3);
    const color = new THREE.Color();

    const galaxyColors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#F8FAFC']; // Bright colors for dark background

    for (let i = 0; i < pointsCount; i++) {
      const r = 20 * Math.cbrt(Math.random()); // Radius up to 20
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      color.set(galaxyColors[Math.floor(Math.random() * galaxyColors.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Reduce scroll sensitivity so the effect feels less aggressive
      const targetX = scrollRef.current * 0.0005;
      const targetY = scrollRef.current * 0.0002;

      // Smoothly interpolate (lerp) towards target
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04;

      // Warp speed Z-axis drift (4D effect)
      // Base speed + mouse effect, tuned down for a gentler motion
      const warpSpeed = 0.008 + Math.abs((state.pointer.x || 0) * 0.012);
      groupRef.current.position.z += warpSpeed;
      if (groupRef.current.position.z > 20) {
        groupRef.current.position.z = -10; // reset to loop seamlessly
      }
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <group ref={groupRef}>
        <Points positions={positions} colors={colors} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            vertexColors
            size={0.06}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            opacity={1}
          />
        </Points>
      </group>
    </group>
  );
}


export function GalaxyBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background transition-colors duration-700">
      
      {/* 3D Solar System (always rendered, transparent bg) */}
      <div className="absolute inset-0 z-10 transition-opacity duration-1000"> 
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <Starfield />
        </Canvas>
      </div>

      {/* Dark mode bottom fade */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 transition-opacity duration-1000"
      />
    </div>
  );
}
