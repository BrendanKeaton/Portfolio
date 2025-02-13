import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ZoomedEarth = () => {
  const mountRef = useRef(null);
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);
  const modelRef = useRef(null); // Ref to store the model

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
    const earthTexture = textureLoader.load(
      "/earth_tech_brendan.png",
      (texture) => {
        texture.anisotropy = Math.min(
          renderer.capabilities.getMaxAnisotropy(),
          8
        );
        texture.minFilter = THREE.LinearFilter;
      }
    );

    // Sphere Geometry & Materials
    const sphereGeometry = new THREE.SphereGeometry(3, 40, 40);
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

    // Meshes
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    const wireframeMesh = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    scene.add(earthMesh);
    scene.add(wireframeMesh);

    // Load the .glb model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/global_hawk.glb", (gltf) => {
      const model = gltf.scene;

      // Load a texture for the model
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("/UVnew13.png"); // Replace with your texture path

      // Traverse the model's scene graph
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Create a new material with the texture and wireframe enabled
          const wireframeMaterial = new THREE.MeshBasicMaterial({
            map: texture, // Apply the texture
            wireframe: true, // Enable wireframe
            color: 0x28ffbf, // Optional: Add a color tint
            transparent: false, // Optional: Enable transparency
            opacity: 1, // Optional: Set opacity
          });

          // Replace the mesh's material with the new wireframe material
          child.material = wireframeMaterial;
        }
      });

      // Position, rotate, and scale the model
      model.position.set(3, 1.5, 0);
      model.rotation.x = Math.PI / 20;
      model.rotation.y = -Math.PI / 30;
      model.rotation.z = -Math.PI / 4;
      model.scale.set(0.002, 0.002, 0.002);

      // Store the model in a ref
      modelRef.current = model;

      // Add the model to the scene
      scene.add(model);
    });

    const animate = () => {
      const delta = targetRotation.current - currentRotation.current;
      currentRotation.current += delta * 0.03;

      // Update camera position based on current rotation
      const radius = 5; // Distance from the sphere
      const cameraX = Math.sin(currentRotation.current) * radius;
      const cameraZ = Math.cos(currentRotation.current) * radius;
      camera.position.set(cameraX, 1.4, cameraZ);
      camera.lookAt(new THREE.Vector3(0, 0, 0)); // Make the camera look at the center of the sphere

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Button Handlers
  const handlePrev = () => {
    targetRotation.current -= Math.PI / 4; // Rotate 45 degrees counterclockwise
  };

  const handleNext = () => {
    targetRotation.current += Math.PI / 4; // Rotate 45 degrees clockwise
  };

  const handleSelect = () => {
    console.log("Selected at rotation:", currentRotation.current);
  };

  return (
    <div className="relative w-full h-full">
      {/* Three.js Scene */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Overlayed Buttons */}
      <div className="absolute inset-x-0 bottom-10 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-black text-white rounded-lg shadow-lg"
        >
          Prev
        </button>
        <button
          onClick={handleSelect}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg"
        >
          Select
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-black text-white rounded-lg shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ZoomedEarth;
