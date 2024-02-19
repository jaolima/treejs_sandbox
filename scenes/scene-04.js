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
    new THREE.MeshPhongMaterial({ 
        color: 0xFFFFFF 
    })
);

floor.rotation.x = THREE.MathUtils.degToRad(-90);
// receiveShadow is a property that allows the object to receive a shadow
floor.receiveShadow = true;
scene.add(floor);

// PointLight is a light that gets emitted from a single point in all directions
// const shadowLight = new THREE.PointLight(
//     0xFFFFFF, 2, 10
// );

// DirectionalLight is a light that gets emitted in a specific direction
// const sun = new THREE.DirectionalLight(
//     0xFFFFFF, 1
// );

const spot = new THREE.SpotLight(
    0xFFFFFF, 3, 10, 0.4
);

spot.position.y = 8;
spot.castShadow = true;
// target is a property that allows the light to point to a specific object
spot.target = cube;
scene.add(spot);

x3.add(spot, {helper: { visible: false}});
x3.add(cube);

renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    })
})

