import React, { useEffect, useState } from "react";
import { Viewer } from "resium";
import * as Cesium from 'cesium';
import ViewerLayer from "../ViewerLayer"


function MainViewer(props) {
  //console.log(props.activeLayer);
  //const [activeLayer, setActiveLayer] = useState(props.activeLayer);
  return (
      <Viewer
        full
        id="viewer"
        animation={false}
        timeline={false}
        navigationHelpButton={false}
        geocoder={false}
        baseLayerPicker={false}
        fullscreenButton={false}>
        {/* 图层序列 */}
        <ViewerLayer activeLayer={props.activeLayer} />
      </Viewer>
  )
}

export default MainViewer;