import React, { useState, useEffect } from "react";
import './App.css';

import MainViewer from "./components/MainViewer";
import LayerPicker from "./components/LayerPicker"

import * as Cesium from 'cesium';
import { Drawer } from 'antd';



function App(props) {
  const [layers, setLayers] = useState(props.layers);
  const [activeLayer, setActiveLayer] = useState(null);

  function changeActiveLayer(uid) {
    setActiveLayer(layers.filter((layer) => layer.uid === uid));
  }
  return (
    <div>
      <div id="side-menu">
        <LayerPicker
          layers={layers}
          changeActiveLayer={changeActiveLayer} />
      </div>
      <div id="viewer-container">
        <MainViewer activeLayer={activeLayer} />
      </div>
    </div>
  )
}

export default App;
