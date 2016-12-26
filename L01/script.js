var scene = new THREE.Scene();
var degreesToRadians = function(degrees){
	return degrees*(Math.PI/180);
}
var createCamera = function(){
	var camera = new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,1000);
	camera.position.z=100;
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

var createCube = function(){

	var textureLoader = new THREE.TextureLoader();
	var texture1 = textureLoader.load('textures/1.jpg');
	var texture2 = textureLoader.load('textures/2.jpg');
	var texture3 = textureLoader.load('textures/3.jpg');
	var texture4 = textureLoader.load('textures/4.jpg');
	var texture5 = textureLoader.load('textures/5.jpg');
	var texture6 = textureLoader.load('textures/6.jpg');

	var materials = [
		new THREE.MeshLambertMaterial({map:texture1}),
		new THREE.MeshLambertMaterial({map:texture2}),
		new THREE.MeshLambertMaterial({map:texture3}),
		new THREE.MeshLambertMaterial({map:texture4}),
		new THREE.MeshLambertMaterial({map:texture5}),
		new THREE.MeshLambertMaterial({map:texture6})
	]
	var geometry = new THREE.BoxGeometry(20,20,20);
	var material = new THREE.MultiMaterial(materials);
	var mesh = new THREE.Mesh(geometry,material);
	return mesh;
}

var draw = function(scene,camera,cube){
	window.requestAnimationFrame(function(){
		cube.rotation.y = cube.rotation.y+0.01;
		renderer.render(scene,camera);
		draw(scene,camera,cube);
	})
}



var camera = createCamera();
var renderer = createRenderer();
var light = createLight();
var cube = createCube();

//cube.rotation.x = degreesToRadians(45);
//cube.rotation.y = degreesToRadians(45);
scene.add(light);
scene.add(camera);
scene.add(cube);

//renderer.render(scene,camera);
draw(scene,camera,cube);