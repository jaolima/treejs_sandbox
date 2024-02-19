const path = new THREE.Shape();

// where drawing passes through
// Romantic Heart
path.moveTo(0.3, 1.5);
path.quadraticCurveTo(0.3, 2.2, 0.9, 2.2);
path.quadraticCurveTo(1.3, 2.2, 1.4, 1.7);
path.quadraticCurveTo(1.5, 2.2, 1.9, 2.2);
path.quadraticCurveTo(2.5, 2.2, 2.5, 1.5);
path.quadraticCurveTo(2.5, 1.0, 1.4, 0.3);
path.quadraticCurveTo(0.3, 1.0, 0.3, 1.5);
// path.quadraticCurveTo(5, 1, 8, 3);
// path.bezierCurveTo(3, 5, 6, 1, 8, 3);

// path.lineTo(3, 3);
// path.lineTo(3, 1);
// path.lineTo(1, 1);
// path.lineTo(1, 3);

// const geometry = new THREE.ShapeBufferGeometry(
//     path
// );

const geometry = new THREE.ExtrudeBufferGeometry(
    path, {
        depth: 0.5,
        bevelEnabled: true,
        bevelSize: 0.1,
        bevelThickness: 0.1,
    }
);

// LineBasicMaterial is a set of properties that define how the line should look
const material = new THREE.MeshLambertMaterial(
    { color: 0xeb3452 , side: THREE.DoubleSide}
    );

// Line is a set of points, and a line is drawn between each pair of consecutive points
const draw = new THREE.Mesh(geometry, material);
scene.add(draw);

renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    })
})

