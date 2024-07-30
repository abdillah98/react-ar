import React from 'react';
import BoxModel from './components/BoxModel';
import Box from './components/Box';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { XR, createXRStore } from '@react-three/xr'

function App(props) {

  const store = createXRStore()
  
  // if(props.type !== 'a-frame') return <BoxModel />

  return (  
    <>
      

      <Canvas>
        <XR store={store}>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <OrbitControls />
        </XR>
      </Canvas>
      <div className="fixed left-0 bottom-0 w-full text-center p-[20px]">
        <button 
          className="px-[20px] py-[8px] rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold text-center"
          onClick={ () => {
            console.log('store', store);
            store.enterAR()
          }}
          >
          Enter AR
        </button>
      </div>
    </>
  );
}

export default App;
