<template lang="pug">
div(ref='canvas')
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
    name: "URDFBuilder",
    data: function () {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({
            color: 0xa7cca7,
            wireframe: true
        })
        const cube = new THREE.Mesh(geometry, material)
        return {
            scene: scene,
            camera: camera,
            controls: [],
            renderer: renderer,
            cube: cube,
            speed: 0.01
        }
    },
    created: function () {
        this.scene.add(this.camera)
        this.scene.add(this.cube)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.position.z = 5
        this.scene.background = new THREE.Color('rgb(17,17,17)')
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        window.addEventListener('resize', this.onWindowResize, false)
    },
    mounted: function () {
        this.$refs.canvas.appendChild(this.renderer.domElement)
        this.animate()
    },
    methods: {
        animate: function () {
            requestAnimationFrame(this.animate)
            this.renderer.render(this.scene, this.camera)
            //this.cube.rotation.y += this.speed
            //this.controls.update()
        },
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight
            this.camera.updateProjectionMatrix()
            this.renderer.setSize(window.innerWidth, window.innerHeight)
            this.animate()
        }
    },
    computed: {
        rotate: function () {
            if (this.speed === '') {
                return 0
            } else {
                return this.speed
            }
        }
    }
}
</script>

<style>
#URDFBuilder_Container {
    width: 100%;
    height: 100%;
}
</style>

<!--
    This file will be dedicated to using threejs to design URDF templates
-->
