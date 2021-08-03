<template>
  <footer class="rodape">
    <div id="footer">
      <i class="far fa-copyright"></i> Copyright | Diogo Nascimento
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer,
.rodape {
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: #2c3e50;
}

@media screen and (max-width: 1150px) {
  footer,
  .rodape {
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
