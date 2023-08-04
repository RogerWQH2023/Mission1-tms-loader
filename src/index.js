import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const LAYER_URL = "https://deep-time.org/v1.0/api/data-central/dataset/5fd7fd2c-8140-42d5-b5bd-55f2061b3c3b/atoms?layered=1&pageSize=1000";
/* const LAYERS = [
  { name: "000 PaleoAtlas", url: "https://deep-time.org/tms/ScotesePaleoMap/Map1a_PALEOMAP_PaleoAtlas_0004326/{z}/{x}/{reverseY}.png" },
  { name: "040 MIddle Eocene", url: "https://deep-time.org/tms/ScotesePaleoMap/Map11a_MIddle_Eocene_0404326/{z}/{x}/{reverseY}.png" },
  { name: "095 LtK Cenomanian", url: "https://deep-time.org/tms/ScotesePaleoMap/Map22a_LtK_Cenomanian_0954326/{z}/{x}/{reverseY}.png" },
  { name: "150 LtJ Tithonian", url: "https://deep-time.org/tms/ScotesePaleoMap/Map33a_LtJ_Tithonian_1504326/{z}/{x}/{reverseY}.png" },
  { name: "200 Triassic-Jurassic Boundary", url: "https://deep-time.org/tms/ScotesePaleoMap/Map43a_Triassic-Jurassic_Boundary_2004326/{z}/{x}/{reverseY}.png" }
]; */
//首先加载一个Loading界面，显示正在读取图层
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="loadingbox">
      <h1 styles="font-size: 10px;">FETCHING THE LAYERS</h1>
    </div>
  </React.StrictMode>
);

//首先读取图层数据，读取完毕后再加载地球页面
const layerFetch = fetch(LAYER_URL);
layerFetch.then(response => {
  if (!response.ok) {
    throw new Error(`数据请求错误：${response.status}`);
  }
  return response.json();
}).then(json => {
  //读取图层列表中各个图层的name，url属性，所有图层初始都不显示。
  const LAYERS = json.data.list.map((layer) => {
    //console.log({ name: layer.name, url: layer.layerServiceInfo.url });
    return { uid: layer.uid, name: layer.name, url: layer.layerServiceInfo.url, display: false, description: layer.description };
  });
  //控制台输出图层信息
  //console.log(LAYERS);
  return LAYERS;
}).then(LAYERS => {
  //const root = ReactDOM.createRoot(document.getElementById('root'));
  //数据加载完毕后替换为地球页面，以属性形式传入LAYERS。
  root.render(
    <React.StrictMode>
      <div id='app'>
        <App layers={LAYERS} />
      </div>
    </React.StrictMode>
  );
  //reportWebVitals();
});

reportWebVitals();





  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals





