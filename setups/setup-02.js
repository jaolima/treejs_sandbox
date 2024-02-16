const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0x222222
}

// renderer displays your beautifully crafted scenes
const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    options.width, options.height
)

document.querySelector(
    options.targetSelector
).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(
    options.backgroundColor
);

const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.z = 5;

// LIGHT SETUP

// Ambient light is a light that is always on
/*
const light = new THREE.AmbientLight(
    0x404040, 3
);
*/
