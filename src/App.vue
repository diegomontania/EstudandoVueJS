<template>
  <div>
    <h1>{{ titulo }}</h1>

    <!-- lista de imagens -->
    <ul>

      <!-- faz a iteracao (loop) entre as fotos-->
      <!-- <li v-for="foto of fotos"> 
        <img v-bind:src="foto.url" v-bind:alt="foto.titulo">
      </li> -->

      <!-- faz a iteracao (loop) entre as fotos e retorna uma id da foto-->
      <li v-for='(foto, i) of fotos' v-bind:key ='i'> 
        <img v-bind:src="foto.url" v-bind:alt="foto.titulo">
      </li>
    </ul>

    
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      titulo : "Veterinaria",
      fotos : [
        {
          url : 'https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
          titulo : 'cachorro'
        },
        {
          url : 'https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg',
          titulo : 'cachorro2'
        }
      ]

    }
  }
}
</script>

<style>

</style>
