import * as THREE from "../node_modules/three/build/three.module.js";
import { GLTFLoader} from "../node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "../node_modules/three/examples/jsm/loaders/DRACOLoader.js"

let scene, camera, renderer;

const init = () => {
    // 创建场景
    scene = new THREE.Scene();
    // 场景背景设为黑色
    scene.background = new THREE.Color(0x000000);

    // 创建渲染器，并设置抗锯齿为TRUE
    renderer = new THREE.WebGL1Renderer({ antialias: true });
    // 设置渲染器大小
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 将渲染器的渲染结果挂载到浏览器中
    document.body.appendChild(renderer.domElement);

    // 创建相机
    const aspect = window.innerWidth / window.innerHeight;
    // 视角, 视野, 近点, 远点
    camera = new THREE.PerspectiveCamera(60, aspect, 0.01, 5000);
    // 设置相机位置
    camera.position.set(50, 0, 0);

    // 设置灯光: 环绕光：颜色，亮度
    const ambientLight = new THREE.AmbientLight(0x404040, 20);
    scene.add(ambientLight);

    // 创建模型加载器
    const loader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath('./draco/');
    // loader.setDRACOLoader( dracoLoader );

    loader.load('../models/gc.gltf', 
    function (gltf) {
        scene.add( gltf.scene );
        
        // gltf.animations; // Array<THREE.AnimationClip>
		// gltf.scene; // THREE.Group
		// gltf.scenes; // Array<THREE.Group>
		// gltf.cameras; // Array<THREE.Camera>
		// gltf.asset; // Object
    }, 
    function ( xhr ) {

		// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	})

};

init();
renderer.render(scene, camera);