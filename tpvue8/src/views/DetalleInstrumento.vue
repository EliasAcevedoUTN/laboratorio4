<template>
  <div>
      <b-container>
          <b-card>
              <b-row>
          <b-col cols="8">
              <b-row>
                  <b-img fluid thumbnail style="width:60%" :src="'/images/'+instrumentoEncontrado.imagen"></b-img>
              </b-row>
              <b-row>
                  <p><b>Descripcion</b></p>
                  <p>{{instrumentoEncontrado.descripcion}}</p>
              </b-row>
          </b-col>
            
          <b-col cols="4">
              <b-container flui>
              <h3>{{instrumentoEncontrado.instrumento}}</h3>
              <h2>$ {{instrumentoEncontrado.precio}}</h2>
              <p>Marca: {{instrumentoEncontrado.marca}}</p>
              <p>Modelo: {{instrumentoEncontrado.modelo}}</p>
              <br>
              <br>
              <div v-if="instrumentoEncontrado.costoEnvio != 'G'">
                  <span style="color:red">El costo de envio es de {{instrumentoEncontrado.costoEnvio}}</span>
              </div>
              <div v-if="instrumentoEncontrado.costoEnvio === 'G'">
                  <b-img src="/images/camion.png"></b-img> <span style="color:green">Envio Gratis</span>
              </div>
              <br>
              <br>
              <b-button variant="success" href="/productos">Agregar al carrito</b-button>
              </b-container>
          </b-col>
          </b-row>
        </b-card>
      </b-container>
  </div>
</template>

<script>
export default {
    name: 'DetalleInstrumento',
    components : {
        
    },
    mounted(){
        this.getInstrumento();    
    },
    data(){
        return {
            instrumentoEncontrado: []
        };
    }, 
    methods: {
        async getInstrumento(){
            const instrumentoId = this.$route.params.id;
            const res = await fetch("/instrumentos.json");
            const resJson = await res.json();
            console.log(resJson);
            this.instrumentoEncontrado = await resJson.instrumentos.find(
                instrumento => instrumento.id === instrumentoId
            );
            console.log(this.instrumentoEncontrado);
        }
    }
}
</script>

<style>

</style>