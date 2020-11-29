<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <!-- input do usuário -->
    <!-- $event.target.value pega o valor a cada vez que digita-->
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre por parte do título">

    <!-- lista de imagens -->
    <ul class="lista-fotos">
      <!-- faz a iteracao (loop) entre as fotos e retorna uma id da foto-->
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto"> 
          <meu-painel :titulo="foto.titulo">
            <img class="imagem-resposiva" :src="foto.url" :alt="foto.titulo">
          </meu-painel> 
      </li>
    </ul>

  </div>
</template>

<script>

  // importando o painel criado
  import Painel from './components/shared/painel/Painel.vue';

  export default {

    // cria uma chave de referencia para o componente criado, para poder utiliza-lo
    components : {
      'meu-painel': Painel
    },

    data(){
      return{
        titulo : "Aplicação Vue JS",
        fotos : [],
        filtro : ''
      }
    },

    computed:{
        fotosComFiltro(){
            // se o filtro for aplicado, mostre apenas as fotos procuradas
            if(this.filtro)
            {
              // cria expressão regular que irá fazer a busca pelo conjunto de caracteres pesquisados
              let exp = new RegExp(this.filtro.trim(), 'i');
              
              // retorna a foto utilizando .test do java script procurando pelo titulo da foto
              return this.fotos.filter(foto => exp.test(foto.titulo));
            }
            else  //se nao, retorne todas as fotos
            {
              return this.fotos;
            }
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
  
  /* ajustando imagens dentro do painel */
  .imagem-resposiva{
    width: 100%;
  }

  .filtro{
    display: block;
    width: 100%;
  }

</style>
