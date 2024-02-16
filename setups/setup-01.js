const options = {
    targetSelector: '#scene', //Propriedade que diz onde o nosso render ira desenhar as coisas
    width: 800, height: 600, // Tamanho do nosso render
    backgroundColor: 0x222222 // Cor
}

// Renderer displays your beautifully crafted scenes using WebGL.
const renderer = new THREE.WebGLRenderer();

// Set renderer sizing
renderer.setSize(
    options.width, options.height
)

// Add Element in the DOM
document.querySelector(
    options.targetSelector
).appendChild(renderer.domElement);

// Scene is a container for all the objects in the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(
    options.backgroundColor
);

// Camera is the point of view from which the scene is rendered
const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.z = 5;