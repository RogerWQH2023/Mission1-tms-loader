import React, { useState, useEffect } from "react";
import './App.css';

import MainViewer from "./components/MainViewer";
import LayerPicker from "./components/LayerPicker"

import * as Cesium from 'cesium';
import { Drawer } from 'antd';


/**
 * @param {*} props.layers  内含图层信息，每个图层为{uid, name, url, description}
 * @returns App组件
 */
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
          activeLayer={activeLayer}
          changeActiveLayer={changeActiveLayer} />
      </div>
      <div id="viewer-container">
        <MainViewer activeLayer={activeLayer} />
      </div>
    </div>
  )
}

export default App;
