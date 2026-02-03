import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Global scroll speed multiplier (using a ref pattern to avoid re-renders)
const scrollState = {
  targetSpeed: 1,
  currentSpeed: 1,
};

// Star colors - whites, warm whites, and slight blue tints
const STAR_COLORS = [
  '#ffffff', // pure white
  '#fff8f0', // warm white
  '#f0f8ff', // alice blue
  '#fffaf0', // floral white
  '#ffefd5', // papaya whip (warm)
  '#e6e6fa', // lavender (cool)
  '#fff5ee', // seashell
  '#fffff0', // ivory
];

interface StarData {
  basePosition: THREE.Vector3;
  size: number;
  color: string;
  arcRadius: number;
  arcSpeed: number;
  arcOffset: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  brightness: number;
  layer: number;
  twinkleChance: number; // How often this star twinkles
}

function Star({ data }: { data: StarData }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  
  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;
    
    // Smoothly interpolate current speed toward target
    scrollState.currentSpeed += (scrollState.targetSpeed - scrollState.currentSpeed) * 0.02;
    
    const time = state.clock.elapsedTime;
    const speedMultiplier = scrollState.currentSpeed;
    
    // Very slow arc movement (like real star rotation)
    const arcAngle = time * data.arcSpeed * 0.02 * speedMultiplier + data.arcOffset;
    
    // Stars move in a very gentle arc
    const arcX = data.basePosition.x + Math.sin(arcAngle) * data.arcRadius * 0.2;
    const arcY = data.basePosition.y + Math.cos(arcAngle) * data.arcRadius * 0.1;
    const arcZ = data.basePosition.z;
    
    meshRef.current.position.set(arcX, arcY, arcZ);
    
    // Realistic twinkling - mostly steady with occasional brief flickers
    const twinklePhase = (time * data.twinkleSpeed + data.twinkleOffset) % (Math.PI * 2);
    
    // Only twinkle occasionally based on twinkleChance
    let twinkle = 1.0;
    if (twinklePhase < 0.3) {
      // Brief bright flash
      twinkle = 1.0 + Math.sin(twinklePhase * 10) * 0.5;
    } else if (twinklePhase > Math.PI * 2 - 0.2) {
      // Slight dim
      twinkle = 0.7 + Math.sin(twinklePhase * 8) * 0.2;
    }
    
    materialRef.current.opacity = data.brightness * twinkle;
  });

  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[data.size, 6]} />
      <meshBasicMaterial
        ref={materialRef}
        color={data.color}
        transparent
        opacity={data.brightness}
      />
    </mesh>
  );
}

function StarField({ count = 200 }: { count?: number }) {
  const starData = useMemo<StarData[]>(() => {
    return Array.from({ length: count }, () => {
      const layer = Math.random();
      const spreadX = 120;
      const spreadY = 80;
      
      // Most stars are dim, few are bright
      const brightnessFactor = Math.random();
      const isBrightStar = brightnessFactor > 0.85;
      
      return {
        basePosition: new THREE.Vector3(
          (Math.random() - 0.5) * spreadX,
          (Math.random() - 0.5) * spreadY,
          -5 - Math.random() * 15
        ),
        // Small point-like stars, brighter ones slightly larger
        size: isBrightStar 
          ? 0.04 + Math.random() * 0.06 
          : 0.015 + Math.random() * 0.03,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        arcRadius: 1 + Math.random() * 2, // Very subtle movement
        arcSpeed: 0.02 + Math.random() * 0.05, // Very slow
        arcOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.3 + Math.random() * 0.8, // Slower twinkle cycle
        twinkleOffset: Math.random() * Math.PI * 2,
        brightness: isBrightStar 
          ? 0.7 + Math.random() * 0.3 
          : 0.3 + Math.random() * 0.4,
        layer,
        twinkleChance: Math.random(), // Some stars twinkle more than others
      };
    });
  }, [count]);

  return (
    <group>
      {starData.map((data, i) => (
        <Star key={i} data={data} />
      ))}
    </group>
  );
}

function ShootingStar() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const state = useRef({
    active: false,
    startTime: 0,
    startX: 0,
    startY: 0,
    angle: 0,
    speed: 0,
    nextTrigger: Math.random() * 10 + 5,
  });
  
  useFrame(({ clock }) => {
    if (!meshRef.current || !materialRef.current) return;
    
    const time = clock.elapsedTime;
    
    if (!state.current.active) {
      if (time > state.current.nextTrigger) {
        state.current.active = true;
        state.current.startTime = time;
        state.current.startX = (Math.random() - 0.3) * 60;
        state.current.startY = 15 + Math.random() * 10;
        state.current.angle = -0.3 - Math.random() * 0.4;
        state.current.speed = 30 + Math.random() * 20;
      }
      materialRef.current.opacity = 0;
      return;
    }
    
    const elapsed = time - state.current.startTime;
    const distance = elapsed * state.current.speed;
    
    const x = state.current.startX + Math.cos(state.current.angle) * distance;
    const y = state.current.startY + Math.sin(state.current.angle) * distance;
    
    meshRef.current.position.set(x, y, -5);
    meshRef.current.rotation.z = state.current.angle;
    
    const duration = 1.5;
    const progress = elapsed / duration;
    const opacity = progress < 0.2 
      ? progress / 0.2 
      : progress < 0.8 
        ? 1 
        : 1 - (progress - 0.8) / 0.2;
    
    materialRef.current.opacity = Math.max(0, opacity * 0.8);
    
    if (elapsed > duration) {
      state.current.active = false;
      state.current.nextTrigger = time + 8 + Math.random() * 15;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 0.02]} />
      <meshBasicMaterial
        ref={materialRef}
        color="#ffffff"
        transparent
        opacity={0}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <StarField count={500} />
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
    </>
  );
}

export default function PaperBackground() {
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  
  useEffect(() => {
    let scrollTimeout: number;
    
    const handleScroll = () => {
      const now = Date.now();
      const deltaTime = now - lastScrollTime.current;
      const deltaScroll = Math.abs(window.scrollY - lastScrollY.current);
      
      if (deltaTime > 0) {
        // Calculate speed boost based on scroll velocity
        const velocity = deltaScroll / Math.max(deltaTime, 16);
        scrollState.targetSpeed = 1 + Math.min(velocity * 3, 4); // Max 5x speed
      }
      
      lastScrollY.current = window.scrollY;
      lastScrollTime.current = now;
      
      // Reset to normal speed after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        scrollState.targetSpeed = 1;
      }, 150);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #0a0a1a 0%, #1a1a2e 30%, #16213e 60%, #1a1a2e 80%, #0a0a1a 100%)',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      {/* Subtle vignette for depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  );
}
