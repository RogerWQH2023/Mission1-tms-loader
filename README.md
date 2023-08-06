## 项目配置方式
- 使用`npx create-react-app mission-1-new`创建一个基础的react项目
- 使用craco-cesium，再上述基础上配置了cesium+resium的环境（我自己直接配置Cesium一直出问题，所以就用了这个库。）
    - Resium介绍：[Resium官网](https://resium.reearth.io/)、[Resium + create-react-app文档](https://resium.reearth.io/installation#1-create-react-app)  
    - craco介绍：[craco-github](https://github.com/reearth/craco-cesium#craco-cesium)
## 项目启动方式：
- 安装依赖——`yarn install`
- 启动项目——`yarn start`
## 存在的疑问：
- 不知道现在React+Cesium具体用什么库，怎么编写。在这个项目中我使用了resium和carco，resium能把viewer，layer，entity等都转换成单独的组件，使用时要配合cesium库；而carco则是用于为create-react-app创建的项目配置Cesium环境。
- 现在这个项目中，Resium/Cesium和antd存在冲突，不知道具体原因。只要一使用antd的组件，Resium/Cesium的大部分组件就会失效（如图层就加载不出来，且也不报错），只有Viewer在运行，但是会莫名其妙出现第二个Viewer，第二个Viewer会紧跟在正常Viewer位置的正下方，且两者似乎是独立运行的。不知道具体原因。
