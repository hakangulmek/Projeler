// threePage.js
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

function Stormtrooper() {
  const { scene, animations } = useGLTF("/src/assets/Three2.glb"); // GLB dosyasını yükle ve animasyonları al
  const { actions } = useAnimations(animations, scene); // Animasyonları sahne ile ilişkilendir

  // İlk animasyonu otomatik olarak başlat
  if (actions && animations.length > 0) {
    actions[animations[0].name]?.play();
  }

  return <primitive object={scene} scale={0.5} position={[0, -0.5, 0]} />;
}

function ThreePage() {
  return (
    <div className="p-4" style={{ height: "70vh", background: "#EFBFA8" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Stormtrooper />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default ThreePage;
