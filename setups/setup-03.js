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

camera.position.x = 7.50;
camera.position.y = 4;
camera.position.z = 7;

// LIGHT SETUP

// Ambient light is a light that is always on
/*
const light = new THREE.AmbientLight(
    0x404040, 3
);
*/

// Hemisphere light is a light that has a color on the top and a color on the bottom
const light = new THREE.HemisphereLight(
    0xFFFFFF, 0x080820, 0.9
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
    },
    { 
        grid: { visible: false },
        axes: { visible: false } 
    },
    
);

x3.add(camera, {open: false});
x3.add(light, {helper: { visible: false }});

// enabling shadows
renderer.shadowMap.enabled = true;
// PCFSoftShadowMap is a technique used to improve the quality of the shadow
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// physicallyCorrectLights is a property that allows the lights to behave more like real life lights
renderer.physicallyCorrectLights = true;