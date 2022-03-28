<template>
    <div>
        <div class="font-12 col-personaje mt-4">
            <div class="d-flex" >
                <div    :class="personaje.image=='' ? 'd-none':'d-flex align-items-center'">
                    <img    class="card-personaje d-none d-md-block" 
                            v-bind:src="personaje.image" 
                            alt="Responsive image"/>
                </div>
                <div    class="ml-auto w-100 p-3">
                <span   class="dot"
                        :class="personaje.status=='Alive'?'bg-success':'bg-danger'"></span>
                <span   class="status ml-1">{{personaje.status}} - {{personaje.name}}</span>

                <div class="nombre w-100 text-left">
                    <a  class="cursor-pointer" @click="modalPersonaje(personaje.id)" role="button">
                        {{personaje.name}}</a>
                </div>
                <div class="w-100">
                    <span   class="subtitulo">Last known location:</span>
                </div>                
                <span   class="subtituloText">{{personaje.location.name}}</span>
                <div class="w-100">
                    <span   class="subtitulo">First seen in:</span>
                </div>                
                <span   class="subtituloText">{{personaje.origin.name}}</span>                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["personaje"],
    data() {
        return {
            indexLoc: this.index
        }
    },		
    mounted() {		    
    },
    methods: {
      modalPersonaje(id){
          console.log(id)
      }  
    }
}
</script>
<style>
.subtituloText{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #000000;
}
.subtitulo{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #828282;
}
.nombre, a{
    width: 100px;
    height: 20px;
    left: 155px;
    top: 30px;
    text-decoration: none !important; 
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    text-align: center;

    color: #000000 !important; 
}
.status{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #4F4F4F;
}
.dot {
  height: 6px;
  width: 6px;
  border-radius: 50%;
  display: inline-block;
}
.card-personaje {
    width: 160px;
    height: 140px;
}
.col-personaje {
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
}

.truncate-text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>
