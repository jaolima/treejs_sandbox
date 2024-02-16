
// Material is a set of properties that define how the surface of the geometry should look
const material = new THREE.MeshLambertMaterial(
    { color: 0x348feb }
);

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
        1, 1, 1
    ), 
    material
);

scene.add(cube);

const circle = new THREE.Mesh(
    // radius, segments
    new THREE.CircleBufferGeometry(
        0.5, 20
    ),
    material
)

circle.position.x = -2;
circle.rotation.x =  THREE.MathUtils.degToRad(-90);
scene.add(circle);

const cone = new THREE.Mesh(
    // radius, height, segments
new THREE.ConeBufferGeometry(
        0.3, 0.5
),
        material
);
cone.position.x = -2;
cone.position.y =  2;

scene.add(cone);
        

        
x3.add(cone, { label: 'cone' });
x3.add(circle, { label: 'circle' });

// takes the scene and the camera and draws the scene (like a photograph)
/*
cube.rotation.x = 90;
cube.rotation.y = 90;

renderer.render(scene, camera);
*/

// The animation loop
renderer.setAnimationLoop(() => {
    x3.tick();

    // x3.fps() is a helper function that logs the current frame rate to the console
    x3.fps(() => {
        renderer.render(scene, camera);
    })
})
x3.add(cube);


