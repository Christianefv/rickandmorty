<template>
    <b-modal hide-footer id="modal-detalle" size="lg">
        <div class="row">
            <div class="col-12 p-0">
                <img class="portada w-100" :src="personaje.image">
                <div class="contraportada w-100">
                    <img class="imgavatar" :src="personaje.image">
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12 episodiotext">
                Información
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="offset-1 col-8 border" style="border-radius: 8px 8px;">
                        <div class="row">
                            <div    class="bg-secondary ml-1 d-flex text-center justify-content-center align-items-center" 
                                    style="margin-top:6px; width:8px; height:8px; font-size:6px; border-radius:50px !important;">
                                <i class="fas fa-info bg-secondary text-white"></i>
                            </div>
                            <span class="pt-1"  style="font-size:8px;">Gender:</span>
                        </div>
                        <div class="row d-flex text-center justify-content-center align-items-center font-weight-bold">
                            {{personaje.gender}}
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="col-4">
                 <div class="row">
                    <div class="offset-1 col-8 border" style="border-radius: 8px 8px;">
                        <div class="row">
                            <div    class="bg-secondary ml-1 d-flex text-center justify-content-center align-items-center" 
                                    style="margin-top:6px; width:8px; height:8px; font-size:6px; border-radius:50px !important;">
                                <i class="fas fa-info bg-secondary text-white"></i>
                            </div>
                            <span class="pt-1"  style="font-size:8px;">Origin:</span>
                        </div>
                        <div v-if="personaje.origin" class="row d-flex text-center justify-content-center align-items-center font-weight-bold">
                            {{personaje.origin.name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                 <div class="row">
                    <div class="offset-1 col-8 border" style="border-radius: 8px 8px;">
                        <div class="row">
                            <div    class="bg-secondary ml-1 d-flex text-center justify-content-center align-items-center" 
                                    style="margin-top:6px; width:8px; height:8px; font-size:6px; border-radius:50px !important;">
                                <i class="fas fa-info bg-secondary text-white"></i>
                            </div>
                            <span class="pt-1"  style="font-size:8px;">Type:</span>
                        </div>
                        <div class="row d-flex text-center justify-content-center align-items-center font-weight-bold">
                            {{personaje.species}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12 episodiotext">
                Episodios
            </div>
        </div>
        <div class="row">
            <div class="col-3 mt-1" v-for="episodio in episodios" :key="episodio.id">
                 <div class="row">
                    <div class="offset-1 col-10 border" style="border-radius: 8px 8px;">
                        <div class="row">
                            <span class="pt-1 text-namme-episode">{{episodio.name}}</span>
                        </div>
                        <div class="row font-weight-bold">
                            {{episodio.episode}}
                        </div>
                        <div class="row text-date">
                            {{episodio.air_date}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12 episodiotext">
                Personajes interesantes
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12 col-md-12 col-lg-6 col-xl-6" v-for="(personaje, index) in personajesInteresantes" :key="index">
                <pm-card-personaje :personaje="personaje"
                    :idFavoritos="idFavoritos"
                    @agregarFavorito="agregarFavorito">
                </pm-card-personaje>
            </div>
        </div>
        
        <div class="row mt-2">
            <div    class="col-12 d-flex justify-content-end">
                <button class="btn btn-compartir text-white d-flex justify-content-center align-items-center"
                    >
                    Compartir personaje
                </button>
            </div>
        </div>
	</b-modal>
</template>
<script>
import PmCardPersonaje from "@/components/CardPersonaje"
export default {
    props: ["personaje", "episodios","personajesInteresantes", "idFavoritos"],
    data() {
        return {
            
        }
    },
    components: {
		PmCardPersonaje
	},
    mounted() {
    },
    computed:{
    },
    methods: {
      modalPersonaje(id){
          this.$emit("mostarModalPersonaje", id)
      },
     agregarFavorito(personaje,favoritos){
         this.$emit("agregarFavorito", personaje, favoritos)
     }
    }
}
</script>
<style scoped>
.text-namme-episode{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.07px;
    color: #828282;
}
.text-date{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.07px;
    color: #828282;
}
.btn-compartir{		
	padding: 11px 20px;	
	height: 44px;
	background: #11555F;
	border-radius: 60px;
}
.episodiotext{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
}
.imgavatar{
    position: absolute;
    width:100px;
    top: calc(73% - 152px/2 - 47.5px);	
    left: calc(63% - 152px/2 - 47.5px);	
    bottom: 1193px;    
    border: 4px solid #FFFBFB;
    box-sizing: border-box;
    border-radius: 155px;
}
.contraportada{
    height: 139px;
    background: #F2F2F2;
}
.portada{
    height: 180px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px 10px 0px 0px;
}
</style>
