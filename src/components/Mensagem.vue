<template>
  <div class="login-box">
    <h2>Deixe sua mensagem aqui!</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required="" />
        <label>Nome *</label>
      </div>
      <div class="user-box">
        <input type="email" name="" required="" />
        <label>E-mail *</label>
      </div>
      <div class="textarea">
        <label>Mensagem *</label>
        <textarea name="msg" id="msg" cols="40" rows="8" required=""></textarea>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Enviar
      </a>
    </form>

    <div class="info-box">
      <h2>Contato</h2>
      <div class="contatos">
        <div class="contact-box">
          <a href="mailto: diogon21@yahoo.com.br"><i class="fas fa-envelope-square"></i> <span> Email: diogon21@yahoo.com.br</span></a
          >
        </div>
        <div class="contact-box">
          <a href="tel:+55 (21)98902 -0276"><i class="fas fa-phone-square-alt"></i><span> Telefone: (21) 98902 - 0276</span></a
          >
        </div>
        <div class="contact-box">
          <a href="https://www.linkedin.com/in/diogo-nascimento-02199879/"><i class="fab fa-linkedin"></i> <span> Linkedin: /diogo-nascimento-02199879/</span></a
          >
        </div>
        <div class="contact-box">
          <a href="https://github.com/Diogonsc"><i class="fab fa-github-square"></i> <span> Github: https://github.com/Diogonsc</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.info-box {
  position: absolute;
  top: 50%;
  left: 180%;
  width: 30vw;
  height: 50vh;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #2c3e50;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}
.contact-box a {
  color:#fff;
  display: flex;
  margin: 40px;
}

.contact-box a:hover {
  color: #42b983;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 30%;
  width: 30vw;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #2c3e50;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #42b983;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #42b983;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #42b983;
  color: #fff;
  border-radius: 5px;
}

.login-box a span {
  position: absolute;
  display: block;
}

@media screen and (max-width: 1150px) {
  .login-box {
    width: 100vw;
    left: 50%;
    top: 51%;
    border-radius: 0px;
  }

  .info-box {
    width: 100vw;
    height: 70vh;
    left: 50%;
    top: 120%;
    border-radius: 0px;
  }
  .contact-box a{
    margin:50px 0;
  }
}
</style>
