<template>
  <div class="contato">
    <Mensagem />
    <Footer />
  </div>
</template>

<script>
import Mensagem from "../components/Mensagem.vue";
import Footer from '../components/Footer.vue';
export default {
  name: "Contato",
  components: {
    Mensagem,
    Footer,
  },
};
</script>

<style>
.contato {
  display: flex;
  justify-content: space-around;
}
</style>
