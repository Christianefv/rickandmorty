<template>
    <div>
		<pm-welcome background="portal-morty-smith-rick.png">
			<template slot="contenido">
				<div class="row border justify-content-center align-items-center m-0">
					<img class="imgtext" src="@/assets/rick-and-morty.png"/>
					<h1 class="fuente-titulo">Bienvenido a Rick and Morty</h1>
					<button class="btn btn-continuar" @click="Continuar">
							Continuar
					</button>
				</div>
			</template>
		</pm-welcome>
	</div>
</template>
<script>
//import servicio from "@/services/servicio"
import PmWelcome from "@/components/Welcome"
export default {
	data() {
		return {
			categorias:[]
		}
	},	
	components: {
		PmWelcome
	},
	mounted() {
		document.querySelector(".fondoInicio").style.backgroundImage =
		"url(" + require(`@/assets/portal-morty-smith-rick.png`) + ")"
		//this.consultarCategorias()
	},
	methods:{
		Continuar(){
			this.$router.push({ path: "/home" })
		}		
	}
}
</script>
<style scoped>
.btn-continuar{
	position: absolute;
	display: flex;
	flex-direction: row !important;
	align-items: center;
	padding: 11px 20px;
	width: 120px;
	height: 44px;
	background: #11555F;
	border-radius: 60px;
	top: calc(90% - 120px/2 - 47.5px) !important;	
}
.fuente-titulo{
	position: absolute;
	width: 872px;
	height: 53px;
	left: calc(50% - 872px/2);
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 44px;
	text-align: center;
	top: calc(75% - 120px/2 - 47.5px) !important;	
	color: #FFFFFF;
}

.imgtext{
	position: absolute;
	width: 664px;
	height: 233px;
	left: calc(50% - 664px/2 + 22px);
	top: calc(50% - 233px/2 - 47.5px);	
}
</style>