const options = {
    targetSelector: '#scene', //Propriedade que diz onde o nosso render ira desenhar as coisas
    width: 800, height: 600, // Tamanho do nosso render
    backgroundColor: 0x222222 // Cor
}

// Renderer displays your beautifully crafted scenes using WebGL.
const renderer = new THREE.WebGLRenderer();

// Set renderer sizing
renderer.setSize(
    options.width, options.height
)

// Add Element in the DOM
document.querySelector(
    options.targetSelector
).appendChild(renderer.domElement);
