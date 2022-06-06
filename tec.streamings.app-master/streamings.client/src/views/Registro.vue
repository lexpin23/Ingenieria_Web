<template>

<div class="contenedor">
    <div class="container login-container">
        <div class="row">
            <div class="col-md-6 login-form-2">
            <Titulo texto="Registro" class="text-center"/>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email" value="" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Contraseña" value="" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Registrar" />
                    </div>
                    <div class="form-group">

                        <router-link to="/">
                          <a href="#" class="registerUser">¿Ya tienes cuenta? Click aquí</a>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>


</div>
<!-- <div class="row" id="registro">
      <Titulo texto="Registro"/>
      <h2>Usuario: {{ usuario }}</h2>
      <h2>Cuenta: {{cuenta ? 'Activa':'Desactivada'}}</h2>
      <div v-for="(usuario,index) in tipoUsuario" :key="index">
          {{ index + 1}} - {{ usuario }}
      </div> {{}}
  </div>-->

  
  
</template>

<script>

import Titulo from '../components/Titulo.vue'

export default {
    components: {
    Titulo
},
    data() {
        return {
            usuario: 'lexpin23',
            cuenta: true,
            tipoUsuario: ['normal','especial']
        }
    },

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