<template>
  <div class="galeria">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Footer />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Footer from '../components/Footer.vue';
export default {
  name: "Galeria",
  components: {
    Card,
    Footer,
  },
};
</script>

<style>
  .galeria {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
</style>
