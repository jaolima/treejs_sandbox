
// Material is a set of properties that define how the surface of the geometry should look
const material = new THREE.MeshLambertMaterial(
    { color: 0x348feb }
);

// CUBE
const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(
        1, 1, 1
    ), 
    material
);

scene.add(cube);

// CIRCLE
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

//  CONE
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
        

// CYLINDER
const cylinder = new THREE.Mesh(
    // radiusTop, radiusBottom, height, radialSegments
new THREE.CylinderBufferGeometry(
        0.5, 0.5, 1
),
        material
);
cylinder.position.x = 2;
cylinder.position.y =  0;

scene.add(cylinder);

// PLANE
const plane = new THREE.Mesh(
    // radiusTop, radiusBottom, height, radialSegments
new THREE.PlaneBufferGeometry(
        0.5, 0.5, 1
),
        material
);
plane.position.x = 2;
plane.position.y =  2;
plane.rotation.x =  THREE.MathUtils.degToRad(-90);

scene.add(plane);

// SPHERE
const sphere = new THREE.Mesh(
    // radiusTop, widthSegment, heightSegments
new THREE.SphereBufferGeometry(
        0.3, 20, 20
),
        material
);
sphere.position.x = 0;
sphere.position.y =  2;

scene.add(sphere);
x3.add(cone, { label: 'cone' });
x3.add(circle, { label: 'circle' });
x3.add(cylinder, { label: 'cylinder' });
x3.add(plane, { label: 'plane' });

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


