const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({ 
        color: 0x368ed1 
    })
);

cube.position.x = 1;
cube.position.y = 1;
// castShadow is a property that allows the object to cast a shadow
cube.castShadow = true;
scene.add(cube);

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshLambertMaterial({ 
        color: 0xFFFFFF 
    })
);

floor.rotation.x = THREE.MathUtils.degToRad(-90);
// receiveShadow is a property that allows the object to receive a shadow
floor.receiveShadow = true;
scene.add(floor);

// DirectionalLight is a light that gets emitted in a specific direction
const sun = new THREE.DirectionalLight(
    0xFFFFFF, 1
);
sun.position.y = 8;
sun.castShadow = true;
// target is a property that allows the light to point to a specific object
sun.target = cube;
scene.add(sun);

x3.add(sun);
x3.add(cube);

renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    })
})

