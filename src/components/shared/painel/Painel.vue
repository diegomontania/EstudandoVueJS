<template>

    <div class="painel">
        <h2 class="painel-titulo" @dblclick="visivel = !visivel" >{{ titulo }}</h2>
        <transition name="painel-fade">   <!--responsável por aplicar estilos css de animação-->
          <div class="painel-conteudo" v-show="visivel">
          <slot></slot>
        </div>
        </transition>  
    </div>

</template>

<script>
    export default {
        // define que as propriedades (dados) que componente aceita receber
        props: ['titulo'],

        data(){
          return {
            visivel: true
          }
        }
    }
</script>

<style>

  /* estilo do painel */ 
  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 5px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    background: rgb(51, 203, 253);
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  /* animações de fade do painel */
  .painel-fade-enter, .painel-fade-leave-active{
    opacity: 0;
  }

  .painel-fade-enter-active, .painel-fade-leave-active{
    transition: opacity 0.3s;
  }
</style>
