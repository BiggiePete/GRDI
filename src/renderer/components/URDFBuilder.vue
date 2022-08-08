<template>
    <div>
        <div class="builder">

        </div>
    </div>
</template>

<script lang="ts">
import * as THREE from "three"
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
    mounted() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const clock = new THREE.Clock();
        const renderer = new THREE.WebGLRenderer({
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementsByClassName("builder")[0].appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({
            color: 0xa7cca7,
            wireframe: true,
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        //const controls = new OrbitControls(camera, renderer.domElement);
        //controls.update();

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            //controls.update()
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

    }
}
</script>

<style>
</style>

<!--
    This file will be dedicated to using threejs to design URDF templates
-->
