import React, { useState } from "react";
import './App.css';

import MainViewer from "./components/MainViewer";
import LayerPicker from "./components/LayerPicker"




/**
 * @param {*} props.layers  内含图层信息，每个图层为{uid, name, url, description}
 * @returns App组件
 */
function App(props) {
  const [activeLayer, setActiveLayer] = useState(null);

  function changeActiveLayer(uid) {
    setActiveLayer(props.layers.filter((layer) => layer.uid === uid));
  }
  return (
    <div>
      <div id="side-menu">
        <LayerPicker
          layers={props.layers}
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
