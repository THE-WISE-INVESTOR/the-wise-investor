<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" >The wise investor</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Investor feed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Initiate your project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profil</a>
          </li>
      </ul>
      <form class="d-flex">
        <button type="button" class="btn btn-outline-secondary">Log out</button>
      </form>
    </div>
  </div>
</nav>
</div>
</template>




<script>
export default {
  name: 'navbar'
}
</script>



<style>
.nav-item{
    font-size:18px;
}
.navbar-brand{
    font-size:24px;    
}
.btn {
font-weight: 500;
}
</style>