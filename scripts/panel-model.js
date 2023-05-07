import * as THREE from "../node_modules/three/build/three.module.js";
import { MTLLoader} from "../node_modules/three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "../node_modules/three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
import * as SceneUtils from "../node_modules/three/examples/jsm/utils/SceneUtils.js"

// 创建一个空白场景和平面
// Canvas
const canvas = document.getElementById('mainCanvas');
const container = document.getElementById('three-container');
// Scene
const scene = new THREE.Scene()
// Gui
// const gui = new dat.GUI()
// Size
const sizes = {
    width: container.clientWidth,
    height: container.clientHeight,
}
// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(4, 4, 12)
camera.layers.enable(1)
// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.zoomSpeed = 0.3
controls.target = new THREE.Vector3(0, 3, 0)
/**
 * Objects
 */
// plane
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 15),
    new THREE.MeshStandardMaterial({
        color: 'rgba(34, 89, 239, 0.6)',
    })
)
plane.rotateX(-Math.PI / 2)
plane.receiveShadow = true
scene.add(plane)
/**
 * Light
 */
const directionLight = new THREE.DirectionalLight()
directionLight.castShadow = true
directionLight.position.set(5, 5, 6)
directionLight.shadow.camera.near = 1
directionLight.shadow.camera.far = 20
directionLight.shadow.camera.top = 10
directionLight.shadow.camera.right = 10
directionLight.shadow.camera.bottom = -10
directionLight.shadow.camera.left = -10

const directionLightHelper = new THREE.DirectionalLightHelper(directionLight, 2)
directionLightHelper.visible = false
scene.add(directionLightHelper)

const directionalLightCameraHelper = new THREE.CameraHelper(directionLight.shadow.camera)
directionalLightCameraHelper.visible = false
scene.add(directionalLightCameraHelper)

const ambientLight = new THREE.AmbientLight(new THREE.Color('#ffffff'), 0.3)
scene.add(ambientLight, directionLight)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha:true,
})
renderer.setClearColor(0xffffff, 0.0)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
// Animations
const tick = () => {
//   stats.begin()
  controls.update()
  // Render
  renderer.render(scene, camera)
//   stats.end()
  requestAnimationFrame(tick)
}
tick()
// listenResize(sizes, camera, renderer)
// gui.add(directionLightHelper, 'visible').name('lightHelper visible')
// gui.add(directionalLightCameraHelper, 'visible').name('lightCameraHelper visible')
// gui.add(controls, 'autoRotate')

var mtlLoader = new MTLLoader()
var objLoader = new OBJLoader()
// objLoader.load("../objs/3d-model.obj", (obj) => {
//     obj.scale.set(0.003, 0.003, 0.003);
//     scene.add(obj)
//     renderer.render(scene, camera)
// })

mtlLoader.load('../objs/3d-model.mtl', function(materials) {
    materials.preload()
    objLoader.setMaterials(materials)
    // 加载obj
    objLoader.load('../objs/3d-model.obj', function(obj) {
        // 模型文件太大，缩小一下比例，方便显示
        obj.scale.set(0.003, 0.003, 0.003)
        // obj.scale.set(0.1, 0.1, 0.1)
        // 设置可以投影
        // obj.children.forEach(item => {
        //     item.castShadow = true
        //     item.receiveShadow = true
        // })
        // 添加到场景
        scene.add(obj)
        renderer.render(scene, camera)
    })
})

// function
const renderEffect = function(model) {
  let edgeGroup = new THREE.Group();
  model.traverse((obj) => {
        // 由于汽车由许多mesh组成，因此需要将所有的mesh都转换为EdgesGeometry材质
    if(obj.type === 'Mesh') edgeGroup.add(_renderFrameMesh(obj));
  });
  scene.add(edgeGroup);
  // 重置变换
    function _renderFrameMesh(obj) {
  const edges = new THREE.EdgesGeometry(obj.geometry);
  let color = new THREE.Color(0.1, 0.3, 1);
  var lineBasematerial = new THREE.LineBasicMaterial({
    color: color,
    side: THREE.FrontSide,
        linecap: 'round',
        linejoin: 'round',
  });
      const line = new THREE.LineSegments(edges, lineBasematerial);
  return line;
}
}
const uperVertext = `
varying vec3 vPosition;
void main()
{
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1 );
}
`;

const uperFragment = `
varying vec3 vPosition;
  uniform float height;
  uniform vec4 uFlowColor;
  uniform vec4 uModelColor;
void main()
{
  //模型的基础颜色
 vec4 distColor=uModelColor;
// 流动范围当前点z的高度加上流动线的高度
 float topY = vPosition.y +0.02;
if (height > vPosition.y && height < topY) {
 // 颜色渐变 
  distColor = uFlowColor; 
}

 gl_FragColor = distColor;
}`;
function calcHeight() {
  let length = scanConfig.end - scanConfig.start;
    // 扫描动态效果实现
  scanConfig.value += length / scanConfig.during / 60;
  if (scanConfig.value >= scanConfig.end) {
    scanConfig.value = scanConfig.start;
  }
}
function render() {
  renderer.render(scene, camera);
  calcHeight()
  controls.update()
  requestAnimationFrame(render);
}




// var scene = new THREE.Scene();

// // 2、创建相机（透视投影相机）
// var camera = new THREE.PerspectiveCamera(
//     100, // 相机视野
//     document.getElementById('three-container').clientWidth / document.getElementById('three-container').clientHeight, // 水平方向和竖直方向长度的比值
//     0.1, // 近端渲染距离
//     1000 // 远端渲染距离
// );
// // var camera = new THREE.OrthographicCamera(
// //     -2,2,1,-1,1,10
// // );
// // 2.1 设置相机位置
// // camera.position.x = 5;
// // camera.position.y = 10;
// // camera.position.z = 10;
// // 2.1 设置相机位置简写方式：
// camera.position.set(5, 10, 10);
// // 3、创建渲染器
// var renderer = new THREE.WebGLRenderer({canvas:document.getElementById("mainCanvas"), alpha:true});
// // 3.1 设置渲染器的大小（长宽）（设置渲染器为全屏）
// renderer.setSize( document.getElementById('three-container').clientWidth, document.getElementById('three-container').clientHeight);
// renderer.setClearColor(0xffffff, 0.0)
// // 3.2 将渲染结果展示到页面上
// document.getElementById('three-container').appendChild(renderer.domElement);
// // 4、创建几何体模型（立方几何体）
// var geometry = new THREE.BoxGeometry(4, 4, 4);
// var geometry2 = new THREE.BoxGeometry(4, 4, 4);
// // 5、创建材质（基础网格材质和法线网格材质）
// // 5.1 创建基础网格材质
// var materialBasic = new THREE.MeshBasicMaterial({
//     color: 0xffffff, // 白色
//     // color: 0x00ff00, // 绿色
//     wireframe: true, //是否将几何体渲染为线框，默认值为false（即渲染为平面多边形
//     // wireframeLineWidth: 2,
// });
// // 5.2 创建法线网格材质
// var materialNormal = new THREE.MeshNormalMaterial();
// // 6、创建多种网格（因为有多个材质）
// // 第一个参数是几何模型，第二参数是材质
// var cube = SceneUtils.createMultiMaterialObject(geometry, [
//     materialBasic,
//     materialNormal
// ]);
// var cube2 = SceneUtils.createMultiMaterialObject(geometry2, [
//     materialBasic,
//     materialNormal
// ])

// cube2.position.set(0,0,4);
// // 6.1、将网格添加到场景中
// // scene.add(cube);
// // scene.add(cube2);
// // 6.2 让相机 看向（对着）物体（拍摄对象）的位置（默认状态下，相机将指向三维坐标系的原点。）
// camera.lookAt(cube.position);

// // 7、创建光源
// var spotLight = new THREE.SpotLight(0xffffff);
// // 7.1 设置光源位置
// spotLight.position.set(0, 20, 20);
// // 7.2 设置光源照射的强度，默认值为 1
// spotLight.intensity = 5;
// // 7.3 将光源添加到场景中
// scene.add(spotLight);

// // 实例化obj loader
// var objLoader = new OBJLoader()
// // 实例化mtl loader
// var mtlLoader = new MTLLoader()
// objLoader.load("../objs/3d-model.obj",(obj) => {
//     obj.scale.set(0.01, 0.01, 0.01);
//     scene.add(obj);
// })
// // 加载mtl
// // mtlLoader.load('../objs/3d-model.mtl', function(materials) {
// //     materials.preload()
// //     objLoader.setMaterials(materials)
// //     // 加载obj
// //     objLoader.load('../objs/3d-model.obj', function(obj) {
// //         // 模型文件太大，缩小一下比例，方便显示
// //         obj.scale.set(10, 10, 10)
// //         // 设置可以投影
// //         obj.children.forEach(item => {
// //         item.castShadow = true
// //         item.receiveShadow = true
// //         })
// //         let jeepCar = obj
// //         // 添加到场景
// //         scene.add(jeepCar)
// //     })
// // })
// // 8、为了方便观察3D图像，添加三维坐标系对象
// // var axes = new THREE.AxisHelper(6);
// // scene.add(axes);
// // const animate = () => {
// //     requestAnimationFrame(animate);
// //     cube.rotation.x += 0.01
// //     cube.rotation.y += 0.01;
//     // 9、 结合场景和相机进行渲染，即用摄像机拍下此刻的场景
// renderer.render(scene, camera);
// // }
// // animate()
// // 实例化dat.GUI对象
// // var gui = new dat.GUI();
// // // 定义对象，设置需要修改的数据
// // var controls = {
// //     positionX:0,
// //     positionY:0,
// //     positionZ:0
// // };
// // // 把需要修改的配置添加dat.GUI对象中
// // //gui.add(修改的配置对象, 配置对象中修改的数据名称, 修改数据边界的起始点, 修改数据边界的终止点)
// // // onChange: 只要数据发生了变化 就会触发onchange方法
// // gui.add(controls, "positionX", -10, 10).onChange(updatePosition);
// // gui.add(controls, "positionY", -10, 10).onChange(updatePosition);
// // gui.add(controls, "positionZ", -1, 1).onChange(updatePosition);
// // // 定义更新模型位置函数   
// // function updatePosition() {
// //     // 设置网格在页面中的位置
// //     cube.position.set(controls.positionX, controls.positionY, controls.positionZ);
// // }