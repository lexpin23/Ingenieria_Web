<template>

<div id="streaming">
  <Titulo texto="Ruta con parámetros"/>
  <h2>Parámetro: {{ $route.params.id }}</h2>
  <h3>{{ streaming.title }}</h3>
  <p>{{streaming.id}} - {{ streaming.body }}</p>
</div>

</template>

<script>

import Titulo from '../components/Titulo.vue'
export default {
    components: {
        Titulo
    },
     data() {
        return {
            streaming: {}
        }
    },
    methods: {
        async consumirStreaming(){
            try{
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
                const objeto = await data.json();
                console.log(objeto);
                this.streaming = objeto;
            }catch (error){
                console.log(error);
            }
        }
    },
    created(){
        this.consumirStreaming()
    }
}
</script>

<style>

</style>