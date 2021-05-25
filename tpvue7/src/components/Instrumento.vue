<template>
<div>
  <div class="instrumento">
    <b-container>
        <b-row>
            <b-col cols="4">
                <div>
                    <b-button :href="'/detalleInstrumento/' + instrumentoParam.id">
                        <b-img fluid thumbnail :src="'/images/'+instrumentoParam.imagen" ></b-img>
                    </b-button>
                </div>
            </b-col>
            <b-col cols="8">
                <b-row>
                    <h3>{{instrumentoParam.instrumento}}</h3>
                </b-row>
                <b-row>
                    <h3>${{instrumentoParam.precio}}</h3>
                </b-row>
                <b-row>
                    <span style="color:green" v-if="instrumentoParam.costoEnvio == 'G'">Envio Gratis a todo el Pais</span>
                    <span style="color:red" v-if="instrumentoParam.costoEnvio != 'G'">Costo de envio a la Argentina: {{instrumentoParam.costoEnvio}}</span>
                </b-row>
                <b-row>
                    <p>Cantidad vendida {{instrumentoParam.cantidadVendida}}</p>
                </b-row>
            </b-col>
        </b-row>
        <div style="text-align:center">
      </div>
    </b-container>
    </div>
  </div>
</template>

<script>
export default {
    props : ["instrumentoParam"]
}
</script>

<style>
.instrumento {
    max-width: 1000px;
    margin: 0 auto;
}
</style>