<template>
  <div class="sobre">
    <SobreMim />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import SobreMim from '../components/SobreMim.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Sobre",
  components: {
   // HelloWorld,
   SobreMim,
   Footer,

  },
};
</script>
<style scoped>
   
</style>