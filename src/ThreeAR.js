import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';
import * as THREE from 'three';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/assets/fi_buggy/scene.gltf');
  return <primitive object={gltf.scene} scale={0.5} />;
};

const Reticle = () => {
  const reticleRef = useRef();

  useFrame(({ gl }) => {
    if (reticleRef.current && gl.xr.isPresenting) {
      const frame = gl.xr.getFrame();
      if (frame) {
        const referenceSpace = gl.xr.getReferenceSpace();
        const viewerSpace = gl.xr.getViewerSpace();
        const hitTestResults = frame.getHitTestResults(viewerSpace);

        if (hitTestResults.length > 0) {
          const hit = hitTestResults[0];
          const pose = hit.getPose(referenceSpace);
          reticleRef.current.position.set(pose.transform.position.x, pose.transform.position.y, pose.transform.position.z);
          reticleRef.current.visible = true;
        } else {
          reticleRef.current.visible = false;
        }
      }
    }
  });

  return (
    <mesh ref={reticleRef} visible={false}>
      <ringGeometry args={[0.05, 0.1, 32]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

const ThreeAR = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const handleCreated = ({ gl }) => {
      gl.xr.enabled = true;
      const arButton = ARButton.createButton(gl, { requiredFeatures: ['hit-test'] });
      document.body.appendChild(arButton);

      return () => {
        document.body.removeChild(arButton);
      };
    };

    if (canvasRef.current) {
      const { gl } = canvasRef.current;
      if (gl) {
        handleCreated({ gl });
      }
    }
  }, []);

  const handleCreated = ()=> {

  }

  return (
    <Canvas ref={canvasRef} onCreated={handleCreated}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <Reticle />
    </Canvas>
  );
};

export default ThreeAR;
