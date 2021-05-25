<template>
  <div>
    <Menu />
    <b-container >
      <b-card>
        <div
          v-for="instrumento in instrumentosData"
          :key="instrumento.id"
          style="margin-top:15px"
        >
          <instrumento-item :instrumentoParam="instrumento"></instrumento-item>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Instrumento from "@/components/Instrumento.vue";
export default {
  name: "Productos",
  components: {
    Menu,
    "instrumento-item" : Instrumento,
  },
  mounted(){
      this.getInstrumentos();
  },
  data(){
      return {
          instrumentosData: []
      };
  },
  methods:{
      async getInstrumentos(){
          const res = await fetch("/instrumentos.json");
          const resJson = await res.json();
          console.log(resJson);
          this.instrumentosData = resJson.instrumentos;
      }
  }
};
</script>

<style>
</style>