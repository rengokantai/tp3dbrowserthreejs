var scene = new THREE.Scene();

var createCamera = function(){
	var camera = new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,1000);
	camera.position.z=10;
	return camera;
}

var createRenderer = function(){
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);

	document.querySelector('#container').appendChild(renderer.domElement);
	return renderer;
}

var createLight = function(){
	var light = new THREE.PointLight(0xffffff,1);
	light.position.set(0,0,50);
	return light;
}
var camera = createCamera();
var renderer = createRenderer();
var light = createLight();
scene.add(light);

renderer.render(scene,camera);