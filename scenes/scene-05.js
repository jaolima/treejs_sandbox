const ball = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.5, 60, 60),
    new THREE.MeshPhongMaterial({ 
        color: 0xFFFFFF 
    })
);

ball.position.x = 1;
ball.position.y = 1;
// castShadow is a property that allows the object to cast a shadow
ball.castShadow = true;
scene.add(ball);

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshPhongMaterial({ 
        color: 0xFFFFFF, side: THREE.DoubleSide
    })
);

floor.rotation.x = THREE.MathUtils.degToRad(-90);
// receiveShadow is a property that allows the object to receive a shadow
floor.receiveShadow = true;
scene.add(floor);

const spot = new THREE.PointLight(
    0xFFFFFF, 0.75
);

spot.position.y = 4;
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

