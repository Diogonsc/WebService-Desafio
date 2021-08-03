<template>
  <div class="container">
    <div>
      <img id="foto" src="../assets/perfil.jpg" alt="foto-perfil" />
    </div>
    <div id="description">
      <h1>Diogo Nascimento</h1>
      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,<br>
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. <br>Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
        editoração eletrônica, permanecendo essencialmente inalterado. <br>
        Se popularizou na década de 60, quando a Letraset lançou decalques contendo
        passagens de Lorem Ipsum, e mais recentemente quando passou a ser
        integrado a softwares de editoração eletrônica como Aldus PageMaker.
      </p>
      <p>
        É um fato conhecido de todos que um leitor se distrairá com o conteúdo
        de texto legível de uma página quando estiver examinando sua
        diagramação. <br>
        A vantagem de usar Lorem Ipsum é que ele tem uma
        distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo
        aqui", fazendo com que ele tenha uma aparência similar a de um texto
        legível.<br> Muitos softwares de publicação e editores de páginas na
        internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida
        busca por 'lorem ipsum' mostra vários websites ainda em sua fase de
        construção. <br>Várias versões novas surgiram ao longo dos anos,
        eventualmente por acidente, e às vezes de propósito (injetando humor, e
        coisas do gênero).
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.container {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

#foto {
  width: 22vw;
  height: 60vh;
  margin: 4rem auto;
  padding: 1rem;
  border: 2px solid #42b983;
}

#description {
  width: 50vw;
  height: 50vh;
  color: #42b983;
  box-sizing: border-box;
  text-align: justify;
}

h1 {
  text-align: center;
}

@media screen and (max-width: 700px) {
  .container {
      flex-wrap: wrap;
  }
  #foto {
    width: 50vw;
    height: 40vh;
    margin: 10px auto;
  }
  #description{
    width: 90vw;
  }
}

</style>
