<template>
  <div>
    <Menu />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Menu,
  },
};
</script>
