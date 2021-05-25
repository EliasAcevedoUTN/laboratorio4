<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/dondeEstamos">Donde Estamos</b-nav-item>
            <b-nav-item href="/productos">Productos</b-nav-item> 
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
  },
};
</script>

<style>
</style>