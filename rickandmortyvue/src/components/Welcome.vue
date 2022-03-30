<template>
    <div class="header-wrapper">
        <div class="zoominheader fondoInicio">
            <div class="zoomoutheader">
                <div class="container-fluid h-100 w-100 p-0 d-flex justify-content-center align-items-center ">
                    <slot name="contenido"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		props: ["background"],
		components: {
		},
		mounted() {
			if (this.background != null) {
				document.querySelector(".fondoInicio").style.backgroundImage =
					"url(" + require(`@/assets/${this.background}`) + ")"
			}
		},
	}
</script>

<style scoped>
.header-wrapper {
	height: 100vh;
	width: 100%;
	overflow: hidden;
	position: relative;
    background: rgba(0, 0, 0, 0.7);
	z-index: 2;
}
.zoominheader {
	height: 100%;
	width: 100%;
	background-size: cover;
	background-repeat: repeat;
	background-position: center;
	position: relative;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-animation: zoomin 20s ease-in infinite;
	animation: zoomin 20s ease-in infinite;
	transition: all 3s ease-in-out;
	overflow: hidden;
    
}

.zoomoutheader {
	height: 100%;
	width: 100%;
	background: none;
	-webkit-animation: zoomout 20s ease-in infinite;
	animation: zoomout 20s ease-in infinite;
	transition: all 3s ease-in-out;
	overflow: hidden;
    background: rgba(0, 0, 0, 0.7);
}
</style>