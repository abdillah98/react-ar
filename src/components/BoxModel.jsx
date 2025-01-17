import React from 'react';

function BoxModel() {
  return (
    <div style={{ margin: '0px', overflow: 'hidden', 'width': '100%'}}>
       <a-scene arjs='sourceType: webcam; debugUIEnabled: false'>
        <a-anchor hit-testing-enabled="true">
          <a-box position='0 0.5 0' color="#EF2D5E"></a-box>
        </a-anchor>
        <a-marker-camera preset='hiro'></a-marker-camera>
      </a-scene>
    </div>
  );
}

export default BoxModel;
