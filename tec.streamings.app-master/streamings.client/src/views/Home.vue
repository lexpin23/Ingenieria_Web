<template>

<div id="home">
  <Titulo texto="Página de Inicio"/>
  <NavbarPublic/> 
  <router-link to="/Streamings">

  </router-link>

</div>
  
</template>

<script>

import Titulo from '../components/Titulo.vue'
import NavbarPublic from '../components/NavbarPublic.vue'


export default {
      components: {
        Titulo,
        NavbarPublic
        
      }
}
</script>

<style>

</style>