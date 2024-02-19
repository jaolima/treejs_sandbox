const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial({ 
        color: 0x368ed1 
    })
);

cube.position.x = 1;
cube.position.y = 1;
scene.add(cube);

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshLambertMaterial({ 
        color: 0xFFFFFF 
    })
);

floor.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(floor);

renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    })
})

