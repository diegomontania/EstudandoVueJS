<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <!-- lista de imagens -->
    <ul class="lista-fotos">

      <!-- faz a iteracao (loop) entre as fotos-->
      <!-- <li v-for="foto of fotos"> 
        <img v-bind:src="foto.url" v-bind:alt="foto.titulo">
      </li> -->

      <!-- faz a iteracao (loop) entre as fotos e retorna uma id da foto-->
      <li class="lista-fotos-item" v-for='(foto, i) of fotos' v-bind:key ='i'> 
        <img v-bind:src="foto.url" v-bind:alt="foto.titulo">
      </li>
    </ul>

    
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      titulo : "Aplicação Vue JS",
      fotos : []
    }
  },

  // funcao que é chamada assim que o componente é criado
  // sobre 'lifecycle-hooks' https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
  created(){
    let promise = this.$http.get('http://localhost:3000/v1/fotos'); //promessa de dados
    promise
    .then(resposta => resposta.json()) //quando os dados estiverem disponiveis, retorne no formato json
    .then(fotos => this.fotos = fotos, erro => console.log(err)); //do resultado das fotos, pegue as fotos de fato
  }

}
</script>

<style>
  .corpo{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado{
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }
  
</style>
