import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SpinningEarth = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene, Camera, and Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/earth.png");

    // Create UV Sphere with Earth texture
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({
      map: earthTexture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    scene.add(earthMesh);

    // Create wireframe with green glow
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x28ffbf,
      wireframe: true,
    });
    const wireframeMesh = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    scene.add(wireframeMesh);

    // Animation loop
    const animate = () => {
      earthMesh.rotation.y += 0.0015; // Adjust rotation speed
      wireframeMesh.rotation.y += 0.0015; // Match rotation
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default SpinningEarth;
