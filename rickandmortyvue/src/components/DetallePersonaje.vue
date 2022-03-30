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
            <div class="col-12">
                Información
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="offset-4 col-4 border" style="border-radius: 8px 8px;">
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
                    <div class="offset-4 col-4 border" style="border-radius: 8px 8px;">
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
                    <div class="offset-4 col-4 border" style="border-radius: 8px 8px;">
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
	</b-modal>
</template>
<script>
export default {
    props: ["personaje"],
    data() {
        return {
            
        }
    },		
    mounted() {
    },
    computed:{
    },
    methods: {
      modalPersonaje(id){
          this.$emit("mostarModalPersonaje", id)
      },
      mostarFavoritos(){
        this.favoritos = !this.favoritos
        this.$emit("agregarFavorito", this.personaje, this.favoritos)
     }
    }
}
</script>
<style scoped>
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
