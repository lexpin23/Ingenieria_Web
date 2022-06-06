<template>
<div id="login">
  <div class="container login-container">
        <div class="row">
            <div class="col-md-6 login-form-2">
            <Titulo texto="Login" class="text-center"/>
                <form>
                    <div class="form-group">
                        <label><b>Correo electrónico</b></label>
                        <input type="email" name="correo" id="correo" placeholder="18170256@itculiacan.edu.mx" class="form-control" value="" />
                    </div>
                    <div class="form-group">
                        <label><b>NIP</b></label>
                         <input type="password" class="form-control" value="12345" name="nip" id="nip" placeholder="****">
                    </div>
                    <div class="form-group">
                      <router-link to="/streamings">

                        <button class="btn btn-dark col">Ingresar</button>
                        <button id="recuperar" class="btn btn-outline-primary recuperarbtn col">Recuperar</button>
                      </router-link>

                    </div>
                    <div class="form-group text-center">
                        <router-link  to="/registro">
                          <a href="#" class="text-center">¿No tienes cuenta? Click aquí</a>
                        </router-link>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import Titulo from '../components/Titulo.vue'
export default {
  components:{
    Titulo
  },
  data() {
    return {
     respuesta: true
    }
  },
  methods:{
    login(){
     this.respuesta = true;
    }
  }
}
</script>

<style>

body {
    background-color: rgb(231, 216, 238);
    font-family: "Lato", sans-serif;
}

.login-container{
    margin-top: 5%;
    margin-bottom: 5%;
}


.login-form-2{
    padding: 5%;
    background: #ffffff;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3{
    text-align: center;
    color: rgb(0, 0, 0);
}
.login-container form{
    padding: 10%;
}
.btnSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
}

.login-form-2 .btnSubmit{
    font-weight: 600;
    color: #ffffff;
    background-color: rgb(0, 0, 0);
}
.login-form-2 .ForgetPwd{
    color: rgb(0, 0, 0);
    font-weight: 600;
    text-decoration: none;
}


</style>