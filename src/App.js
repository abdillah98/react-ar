import 'aframe';
import 'aframe-ar';
import React from 'react';

function App() {
  return (
    <div style={{ margin: '0px', overflow: 'hidden' }}>
      <a-scene embedded arjs='sourceType: webcam;'>
        <a-box position='0 0.5 0' color="#EF2D5E"></a-box>
        <a-marker-camera preset='hiro'></a-marker-camera>
      </a-scene>
    </div>
  );
}

export default App;
