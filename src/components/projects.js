import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ZoomedEarth = ({ updateSection }) => {
  const mountRef = useRef(null);
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);
  const sat1Ref = useRef(null);
  const planeRef = useRef(null);
  const gateRef = useRef(null);
  const aerosolRef = useRef(null);

  if (typeof updateSection !== "function") {
    console.error("updateSection is not a function");
  }

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(-1.1, 1.4, 3);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      precision: "lowp",
      powerPreference: "high-performance",
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/earth.png", (texture) => {
      texture.anisotropy = Math.min(
        renderer.capabilities.getMaxAnisotropy(),
        8
      );
      texture.minFilter = THREE.LinearFilter;
    });

    const sphereGeometry = new THREE.SphereGeometry(3, 72, 72);
    const earthMaterial = new THREE.MeshBasicMaterial({
      map: earthTexture,
      transparent: false,
      side: THREE.FrontSide,
    });
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x28ffbf,
      wireframe: true,
      side: THREE.FrontSide,
      transparent: false,
    });
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    const wireframeMesh = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    scene.add(earthMesh);
    scene.add(wireframeMesh);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/Juno.glb", (gltf) => {
      const model = gltf.scene;
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("/UVnew13.png");
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const wireframeMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            wireframe: true,
            color: 0xffffff,
            transparent: false,
            opacity: 1,
          });
          child.material = wireframeMaterial;
        }
      });

      model.position.set(0.4, 1.55, 4.9);
      model.rotation.x = Math.PI / 3;
      model.rotation.y = Math.PI / 2;
      model.rotation.z = -Math.PI / 1.1;
      model.scale.set(0.012, 0.012, 0.012);

      sat1Ref.current = model;

      scene.add(model);
    });

    gltfLoader.load("/global_hawk.glb", (gltf) => {
      const hawk = gltf.scene;
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("/UVnew13.png");
      hawk.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const wireframeMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            wireframe: true,
            color: 0xffffff,
            transparent: false,
            opacity: 1,
          });
          child.material = wireframeMaterial;
        }
      });

      hawk.position.set(4.5, 1.55, 0.7);
      hawk.rotation.x = -Math.PI / 2.6;
      hawk.rotation.y = -Math.PI / 2;
      hawk.rotation.z = -Math.PI / 4;
      hawk.scale.set(0.0023, 0.0023, 0.0023);

      planeRef.current = hawk;

      scene.add(hawk);
    });

    gltfLoader.load("/gateway.glb", (gltf) => {
      const gateway = gltf.scene;
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("/UVnew13.png");
      gateway.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const wireframeMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            wireframe: true,
            color: 0xffffff,
            transparent: false,
            opacity: 1,
          });
          child.material = wireframeMaterial;
        }
      });

      gateway.position.set(-4.2, 1.55, 0.9);
      gateway.rotation.x = -Math.PI / 2;
      gateway.rotation.y = -Math.PI / 2;
      gateway.rotation.z = -Math.PI / 4;
      gateway.scale.set(0.012, 0.012, 0.012);

      gateRef.current = gateway;

      scene.add(gateway);
    });

    gltfLoader.load("/aerosol.glb", (gltf) => {
      const aerosol = gltf.scene;
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("/UVnew13.png");
      aerosol.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const wireframeMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            wireframe: true,
            color: 0xffffff,
            transparent: false,
            opacity: 1,
          });
          child.material = wireframeMaterial;
        }
      });

      aerosol.position.set(1.4, 1.55, -3.8);
      aerosol.rotation.x = -Math.PI;
      aerosol.rotation.y = -Math.PI;
      aerosol.rotation.z = -Math.PI / 4;
      aerosol.scale.set(0.00015, 0.00015, 0.00015);

      aerosolRef.current = aerosol;

      scene.add(aerosol);
    });

    const animate = () => {
      const delta = targetRotation.current - currentRotation.current;
      currentRotation.current += delta * 0.015;

      const radius = 5;
      const cameraX = Math.sin(currentRotation.current) * radius;
      const cameraZ = Math.cos(currentRotation.current) * radius;
      camera.position.set(cameraX, 1.4, cameraZ);
      camera.lookAt(new THREE.Vector3(2, 2, 3));

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const stepSize = (2 * Math.PI) / 4;

  const handlePrev = () => {
    targetRotation.current -= stepSize;
    updateSection((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleNext = () => {
    targetRotation.current += stepSize;
    updateSection((prev) => (prev === 3 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute inset-x-0 top-10 flex gap-4 w-full justify-between px-10">
        <button
          onClick={handlePrev}
          className="px-10 py-2 border border-1 border-brendan-green bg-brendan-green text-black font-semibold text-xs"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-10 py-2 border border-1 border-brendan-green bg-brendan-green text-black font-semibold text-xs"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ZoomedEarth;
