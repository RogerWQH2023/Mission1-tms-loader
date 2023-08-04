import React, { createRef, useState } from "react";


function LayerPicker(props) {
    const selector = createRef(null);
    const selections = props.layers.map((layer) => {
        return <option key={layer.uid} value={layer.uid}>{layer.name}</option>
    });
    function layerChange() {
        //console.log(selector.current.value);
        props.changeActiveLayer(selector.current.value);
    }
    return (
    <div>
        <hr />
        <div id="p-abstract">
            <h2>当前图层</h2>
        </div>
        <hr />
        <select ref={selector}>
            {selections}
        </select>
        <div id="n-abstract">
            <h2>图层信息</h2>
        </div>
        <button onClick={layerChange}>切换</button>
        <hr />
    </div>

    )
    ;
}

export default LayerPicker;