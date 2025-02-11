import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SpinningEarth = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

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

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/earth-huge.png");

    const sphereGeometry = new THREE.SphereGeometry(0.9, 40, 40);
    const earthMaterial = new THREE.MeshBasicMaterial({
      map: earthTexture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    scene.add(earthMesh);

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x28ffbf,
      wireframe: true,
    });
    const wireframeMesh = new THREE.Mesh(sphereGeometry, wireframeMaterial);
    scene.add(wireframeMesh);

    const sphereGeometryMoon = new THREE.SphereGeometry(0.12, 12, 12);

    const wireframeMaterialMoon = new THREE.MeshBasicMaterial({
      color: 0xf000f8,
      wireframe: true,
    });
    const wireframeMeshMoon = new THREE.Mesh(
      sphereGeometryMoon,
      wireframeMaterialMoon
    );
    scene.add(wireframeMeshMoon);
    wireframeMeshMoon.position.set(0.9, 0.7, 0);

    const animate = () => {
      earthMesh.rotation.y += 0.0007;
      wireframeMesh.rotation.y += 0.0007;

      const distance = 0.8;
      const speed = -0.0005;
      const time = Date.now() * speed;

      const x = Math.cos(time) * distance;
      const z = Math.sin(time) * distance;

      wireframeMeshMoon.position.set(x, 0.65, z);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default SpinningEarth;
