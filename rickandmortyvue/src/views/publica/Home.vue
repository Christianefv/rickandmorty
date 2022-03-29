<template>
    <div>
		<pm-welcome background="portal-morty-smith-rick.png">		
			<template slot="contenido">
				<div class="row justify-content-center align-items-center m-0">
					<img class="imgtext" src="@/assets/rick-and-morty.png"/>                     
					<div class="search input-group">
						<div class="input-group-prepend">
							<div class="input-group-text bg">
								<i class="fas fa-search"></i>
							</div>
						</div>
						<input 	type="text" 
								class="form-control bg" 
								style="height:50px;"
								placeholder="Buscar personaje..."
								@keyup.enter="buscar"
								v-model="textoBuscar">
					</div>
				</div>
			</template>
		</pm-welcome>
		<div class="row text-center justify-content-center align-items-center text-nav">
			<div 	class="btn col-2 d-flex justify-content-center align-items-center"
					:class="{'isSelected col-2 h-100' : filtro == 'All'}"
					@click="All">				
				All
			</div>
			<div 	class="btn col-2 d-flex justify-content-center align-items-center"
					@click="Unknown"
					:class="{'isSelected col-2 h-100' : filtro == 'Unknown'}">
				Unknown
			</div>
			<div 	class="btn col-2 d-flex justify-content-center align-items-center"
					@click="Female"
					:class="{'isSelected col-2 h-100' : filtro == 'Female'}">
				Female
			</div>
			<div 	class="btn col-2 d-flex justify-content-center align-items-center"
					@click="Male"
					:class="{'isSelected col-2 h-100' : filtro == 'Male'}">
				Male
			</div>
			<div 	class="btn col-2 d-flex justify-content-center align-items-center"
					@click="Genderless"
					:class="{'isSelected col-2 h-100' : filtro == 'Genderless'}">
				Genderless
			</div>
		</div>
		<div class="offset-1 col-10">
			<div class="col row align-items-center mt-2">
				<span 	class="text-fav">Mis favoritos:</span>
				<button class="btn d-flex justify-content-center align-items-center btn-favoritos"
						@click="mostarFavoritos"
						:class="[favoritos?'bg-white':'bg-secondary']"><i class="fas fa-star" :class="[favoritos?'text-warning':'text-white']" ></i></button>
			</div>
			<div class="row">
				<div class="col-12 col-md-12 col-lg-6 col-xl-4" v-for="(personaje, index) in personajes" :key="index">
					<pm-card-personaje :personaje="personaje"
						:modoFavoritos="favoritos"
						@agregarFavorito="agregarFavorito">
					</pm-card-personaje>
				</div>
				{{personajes.length}}
				<div class="col row border d-flex justify-content-center align-items-center" v-if="personajes.length==0">
					<span class="uhoh text-center">
						Uh-oh!
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import servicio from "@/services/servicio"
import PmWelcome from "@/components/Search"
import PmCardPersonaje from "@/components/CardPersonaje"
export default {
	data() {
		return {
			textoBuscar:'',
			filtro:'All',
			personajes:[],
			favoritos:false,
			idFavoritos:[]
		}
	},	
	components: {
		PmWelcome,
		PmCardPersonaje
	},
	async mounted() {
		document.querySelector(".fondoInicio").style.backgroundImage =
		"url(" + require(`@/assets/portal-morty-smith-rick.png`) + ")"
		await this.All()
	},
	methods:{
		agregarFavorito(id, favorito){
			console.log(id)
			if(favorito){
				this.idFavoritos.push(id)
			}
			else{
				let index = this.idFavoritos.indexOf(id);
				if (index > -1) {
					this.idFavoritos.splice(index, 1);
				}
			}
			
		},
		async All(){
			this.filtro="All"
			this.loading=true
			let r = await servicio.all()
			this.personajes = r.results
			this.loading=false
		},
		async Unknown(){
			this.filtro="Unknown"
			this.loading=true
			let r = await servicio.gender('Unknown')
			this.personajes = r.results
			this.loading=false
		},
		async Female(){
			this.filtro="Female"
			this.loading=true
			let r = await servicio.gender('Female')
			this.personajes = r.results
			this.loading=false
		},
		async Male(){
			this.filtro="Male"
			this.loading=true
			let r = await servicio.gender('Male')
			this.personajes = r.results
			this.loading=false
		},
		async Genderless(){
			this.filtro="Genderless"
			this.loading=true
			let r = await servicio.gender('Genderless')
			this.personajes = r.results
			this.loading=false
		},
		async buscar(){
			this.loading=true
			let r = await servicio.searchbyname(this.textoBuscar)
			this.personajes = r.results
			this.textoBuscar = ''
			this.loading=false
		},
		mostarFavoritos(){
			this.favoritos = !this.favoritos
			this.personajes = this.personajes.filter(item => this.idFavoritos.includes(item.id))			
		}
	}
}
</script>
<style scoped>
.uhoh{
	width: 570px;
	height: 43px;
	left: 430px;
	top: 733px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 43px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #353535;
}
.btn-favoritos{
	border-radius: 50% !important;
	width: 30px;
	height: 30px;
}

.text-fav{
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	color: #000000;
}
.isSelected{
	border-bottom: 2px solid #34C759 !important;
	
}

.text-nav{	
	height:70px;	
	background: #F2F2F2;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	color: #000000;
}
.search{
    position: absolute;
    width:500px;
    top: 58.46%;
    bottom: 28.35%;
	height:50px;
}
.bg{
	background: #081F32;
    border-radius: 6px;
}
.imgtext{
	position: absolute;
	width: 347px;
	height: 122px;
	left: calc(50% - 347px/2 + 22px);
	top: calc(50% - 122px/2 - 47.5px);	
}
</style>