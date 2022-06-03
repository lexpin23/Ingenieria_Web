<template>
  <!--<router-view></router-view>-->

  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">Sin Aburrimiento</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Streamings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Canales especiales</a>
              </li>
            </ul>
            <form class="col-lg-5" role="search">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search">
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

          <!-- CONTENIDO -->
      
    <div class="container mt-3">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <div class="row row-cols-2">
                           <img src="./assets/tv-logo.png" alt="tv-logo" class="tv-logo">
                           <b>Netflix</b>
                        </div>
                    </div>
                    <img src="./assets/netflix.jpg" class="card-img-top" alt="img-netflix">
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Ver detalles</a>
                      <a href="#" class="btn btn-primary">Añadir carrito</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <div class="row row-cols-2">
                            <img src="./assets/tv-logo.png" alt="tv-logo" class="tv-logo">
                            <b>HBO</b>
                        </div>
                    </div>
                    <img src="./assets/hbo.jpg" class="card-img-top" alt="img-hbo">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Ver detalles</a>
                        <a href="#" class="btn btn-primary">Añadir carrito</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <div class="row row-cols-2">
                            <img src="./assets/tv-logo.png" alt="tv-logo" class="tv-logo">
                            <b>Paramount</b>
                        </div>
                    </div>
                    <img src="./assets/paramount.jpg" class="card-img-top" alt="img-paramount">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Ver detalles</a>
                        <a href="#" class="btn btn-primary">Añadir carrito</a>
                    </div>
                </div>
            </div>
          
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <div class="row row-cols-2">
                            <img src="./assets/tv-logo.png" alt="tv-logo" class="tv-logo">
                            <b>Amazon Prime</b>
                        </div>
                    </div>
                    <img src="./assets/amazon-prime.jpg" class="card-img-top" alt="img-amazon-prime">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Ver detalles</a>
                        <a href="#" class="btn btn-primary">Añadir carrito</a>
                    </div>
                </div>
            </div>

             
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <div class="row row-cols-2">
                            <img src="./assets/tv-logo.png" alt="tv-logo" class="tv-logo">
                            <b>Disney Plus</b>
                        </div>
                    </div>
                    <img src="./assets/disney-plus.jpg" class="card-img-top" alt="img-disney-plus">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Ver detalles</a>
                        <a href="#" class="btn btn-primary">Añadir carrito</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <div class="row row-cols-2">
                            <img src="./assets/tv-logo.png" alt="tv-logo" class="tv-logo">
                            <b>Apple TV</b>
                        </div>
                    </div>
                    <img src="./assets/apple-tv.png" class="card-img-top" alt="img-apple-tv">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Ver detalles</a>
                        <a href="#" class="btn btn-primary">Añadir carrito</a>
                    </div>
                </div>
            </div>

        </div>
    </div>



  </div>

</template>

<script>


//import Home from './views/Home.vue';


export default {

  name: 'App',
  components: {

  }
}

</script>

<style>

#barra-navegacion{
    height: 80px;
    background-color: #b79de4d3;
}

#barra-navegacion ul li:hover{
    /*background-color: #b79de4d3;*/
}

#streamings{
    /*background-color: #936dd4;*/
}


.tv-logo{
    width: 20%;
}

</style>

