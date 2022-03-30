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
		<div class="col m-0 row text-center justify-content-center align-items-center text-nav">
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
			<div class="col row align-items-center mt-3">
				<span 	class="text-fav">Mis favoritos:</span>
				<button class="btn d-flex justify-content-center align-items-center btn-favoritos"
						@click="mostarFavoritos"
						:class="[favoritos?'bg-white':'bg-secondary']"><i class="fas fa-star" :class="[favoritos?'text-warning':'text-white']" ></i></button>
			</div>
			<div class="row">
				<div class="col-12 col-md-12 col-lg-6 col-xl-4" v-for="(personaje, index) in personajes" :key="index">
					<pm-card-personaje :personaje="personaje"
						:modoFavoritos="favoritos"
						:idFavoritos="idFavoritos"
						@agregarFavorito="agregarFavorito"
						@mostarModalPersonaje="mostarModalPersonaje">
					</pm-card-personaje>
				</div>
				<div 	class="col-12 text-center justify-content-center align-items-center" 
						v-if="personajes==undefined ">
					<div class="col-12 uhoh">
							Uh-oh!
					</div>
					<div class="col-12 textperdido">
							¡Pareces perdido en tu viaje!
					</div>
					<div class="col-12 mt-4">
						<button class="btn btn-eliminar justify-content-center align-items-center text-white" @click="All">
								Eliminar filtros
						</button>
					</div>
				</div>
			</div>
		</div>
		<pm-detalle-personaje 
			:personaje="personajeSeleccionado"
			:episodios="episodios"
			:idFavoritos="idFavoritos"
			:personajesInteresantes="personajesInteresantes"
			@agregarFavorito="agregarFavorito">
		</pm-detalle-personaje>
	</div>
</template>
<script>
import servicio from "@/services/servicio"
import PmWelcome from "@/components/Search"
import PmCardPersonaje from "@/components/CardPersonaje"
import PmDetallePersonaje from "@/components/DetallePersonaje"
export default {
	data() {
		return {
			textoBuscar:'',
			filtro:'All',
			personajes:[],
			favoritos:false,
			idFavoritos:[],
			personajeSeleccionado:{},
			episodios:[],
			personajesInteresantes:[]
		}
	},
	components: {
		PmWelcome,
		PmCardPersonaje,
		PmDetallePersonaje
	},
	async mounted() {
		document.querySelector(".fondoInicio").style.backgroundImage =
		"url(" + require(`@/assets/portal-morty-smith-rick.png`) + ")"
		await this.All()
	},
	methods:{
		agregarFavorito(personaje, favorito){
			console.log(favorito)
			personaje.favoritos = favorito
			if(favorito){
				this.idFavoritos.push(personaje.id)
			}
			else{
				let index = this.idFavoritos.indexOf(personaje.id);
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
			let r = await servicio.gender(this.filtro)
			this.personajes = r.results
			this.loading=false
		},
		async Female(){
			this.filtro="Female"
			this.loading=true
			let r = await servicio.gender(this.filtro)
			this.personajes = r.results
			this.loading=false
		},
		async Male(){
			this.filtro="Male"
			this.loading=true
			let r = await servicio.gender(this.filtro)
			this.personajes = r.results
			this.loading=false
		},
		async Genderless(){
			this.filtro="Genderless"
			this.loading=true
			let r = await servicio.gender(this.filtro)
			this.personajes = r.results
			this.loading=false
		},
		async buscar(){
			this.loading=true
			let r = await servicio.buscar(this.textoBuscar)
			if(r){
				this.personajes = r.results
			}
			this.textoBuscar = ''
			this.loading=false
		},
		mostarFavoritos(){
			this.favoritos = !this.favoritos
			if(this.favoritos){
				this.personajes = this.personajes.filter(item => this.idFavoritos.includes(item.id))
			}
			else{
				switch (this.filtro) {
				case "All":
					this.All()
					break;
				case "Unknown":
					this.Unknown()
					break;
				case "Female":
					this.Female()
					break;
				case "Male":
					this.Male()
					break;
				case "Genderless":
					this.Genderless()
					break;
				default:
					this.All()
					break;
				}
				
			}
		},
		async mostarModalPersonaje(personaje){
			this.personajeSeleccionado = personaje
			let episodiosConcat = ''
			this.personajeSeleccionado.episode.forEach(function(episode) {
				let arrSplit = episode.split('/')
				episodiosConcat += arrSplit[arrSplit.length-1] + ','
			})
			this.consultarEpisodios(episodiosConcat)
			this.$bvModal.show("modal-detalle")
		},
		async consultarEpisodios(episodiosConcat){
			this.loading=true
			let r = await servicio.episode(episodiosConcat)
			this.episodios = r
			await this.getPersonajesInteresantes()
			this.loading=false
		},
		async getPersonajesInteresantes(){
			this.loading=true
			let r = await servicio.personajesInteresantes('1,2,3')
			this.personajesInteresantes = r
			this.loading=false
		}
	}
}
</script>
<style scoped>
.btn-eliminar{
	background: #11555F;
	border-radius: 60px;
}
.textperdido{
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;	
	text-align: center;
	color: #5E5E5E;
}
.uhoh{	
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 43px;
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