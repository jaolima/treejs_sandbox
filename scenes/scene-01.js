
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

