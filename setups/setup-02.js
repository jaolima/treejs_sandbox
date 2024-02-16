const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0x222222
}

// renderer displays your beautifully crafted scenes
// antialias is a technique used to improve the quality of your scene
const renderer = new THREE.WebGLRenderer(
    { antialias: true }
);

// setPixelRatio is used to make sure that your scene looks good on high resolution devices 
renderer.setPixelRatio(
    window.devicePixelRatio
);

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

// Hemisphere light is a light that has a color on the top and a color on the bottom
const light = new THREE.HemisphereLight(
    0xFFFFBB, 0x080820, 2
);

scene.add(light);

console.log(THREEx3)
console.log(THREE.OrbitControls)

const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene
    }
);

x3.add(camera, {open: false});
x3.add(light, {helper: { visible: false }});