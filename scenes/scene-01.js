
// Geometry is a set of points in 3D space that are connected by lines
const geometry = new THREE.BoxBufferGeometry();
// Material is a set of properties that define how the surface of the geometry should look
const material = new THREE.MeshLambertMaterial(
    { color: 0xFFFFFF }
);

const cube = new THREE.Mesh(
    geometry, material
);

scene.add(cube);

// takes the scene and the camera and draws the scene (like a photograph)
/*
cube.rotation.x = 90;
cube.rotation.y = 90;

renderer.render(scene, camera);
*/

// The animation loop
renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    x3.tick();

    // x3.fps() is a helper function that logs the current frame rate to the console
    x3.fps(() => {
        renderer.render(scene, camera);
    })
})
x3.add(cube);


