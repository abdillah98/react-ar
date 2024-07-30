import React from 'react';

function App() {
  return (
    <div>
      <a-scene embedded arjs='sourceType: webcam;'>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-marker-camera preset='hiro'></a-marker-camera>
      </a-scene>
    </div>
  );
}

export default App;
