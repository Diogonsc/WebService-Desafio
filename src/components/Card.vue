<template>
  <div class="card">
    <div class="img-card">
      <span>img</span>
    </div>
    <div class="texto">
      <span>Descrição</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.card {
  width: 15vw;
  height: 40vh;
  border: 2px solid #42b983;
  margin: 5px auto;
}
.img-card {
  margin: 0;
  width: 100%;
  height: 70%;
  background: #ccc;
  color: #000000;
  border-bottom: 2px solid #42b983;
  display: flex;
  justify-content: center;
  align-items: center;
}

.texto {
  color: #000000;
  margin: 20% auto;
}

@media screen and (max-width: 700px) {
  .card {
    width: 45vw;
    margin: 5px;
  }
}
</style>
