const path = new THREE.Path();

// where drawing passes through
path.moveTo(1, 3);
path.lineTo(3, 3);
path.lineTo(3, 1);
path.lineTo(1, 1);
path.lineTo(1, 3);

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(path.getPoints());

// LineBasicMaterial is a set of properties that define how the line should look
const material = new THREE.LineBasicMaterial(
    { color: 0xFFFFFF }
    );

// Line is a set of points, and a line is drawn between each pair of consecutive points
const draw = new THREE.Line(geometry, material);
scene.add(draw);

renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    })
})

