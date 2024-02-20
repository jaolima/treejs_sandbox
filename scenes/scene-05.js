const loader = new THREE.TextureLoader();

const polyester = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg'),
})

const wood = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/basecolor.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/normal.jpg'),
})

const metal = new THREE.MeshStandardMaterial({
    transparent: true, side: THREE.DoubleSide,
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg'),
    alphaMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg'),
    metalnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/metallic.jpg'),
    emissiveMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/emissive.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg'),
    aoMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/ao.jpg'),
    roughnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/roughness.jpg'),
})

const ball = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1.0, 60, 60),
    polyester
);

ball.position.x = 1;
ball.position.y = 1;
// castShadow is a property that allows the object to cast a shadow
ball.castShadow = true;
scene.add(ball);

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    metal
);

floor.rotation.x = THREE.MathUtils.degToRad(-90);
// receiveShadow is a property that allows the object to receive a shadow
floor.receiveShadow = true;
scene.add(floor);

const spot = new THREE.PointLight(
    0xFFFFFF, 0.75
);

spot.position.x = -2;
spot.position.y = 5;
spot.intensity = 14
spot.castShadow = true;
// target is a property that allows the light to point to a specific object
spot.target = ball;
scene.add(spot);

x3.add(ball, {label: 'ball'});
x3.add(floor, {label: 'floor'});
x3.add(spot, {label: 'light'});

renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    })
})

