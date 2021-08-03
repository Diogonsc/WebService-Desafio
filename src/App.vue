<template>
  <div id="app">
    <div id="nav">
      <div>
        <img id="img" alt="Vue logo" src="./assets/logo.png" />
      </div>
      <div>
        <router-link to="/">Sobre</router-link> |
         <router-link to="/galeria">Galeria</router-link> |
        <router-link to="/contato">Contato</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
#img {
  width: 4vw;
  height: 7vh;
}

#nav {
  display: flex;
  align-items:center;
  justify-content: space-around;
  width: 100vw;
  height: 10vh;
  background: #42b983;
}

#nav a {
  margin: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

@media screen and (max-width: 700px) {

  #img {
    width: 20vw;
   height: 10vh;
  }

  #nav a{
    
    margin: 10px;
    font-size: 16px;
  }
}

</style>
