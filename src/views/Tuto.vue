<template>
<!-- <div>
<h1>{{title}}</h1>
<p>{{tutorial}}</p>
</div> -->
<br><br><br>
<div class="blog">
  <div class="card-body"  >
    <h2 class="card-title"> {{title}}</h2>
    <hr>
    <p class="card-text">{{tutorial}}</p>


        <!-- <div>{{message}}</div> -->

      </div>
    </div>
    <br><br><br>
</template>
<script>

export default {
   name:"Tuto",
   props:["title","tutorial"], 
   mounted(){
      console.log("hghgh",this.project)
   },
   computed: {
    Message: function () {
      return "hello"
    }
  }
}
</script>
<style scoped>
p{
    font-size: 20px;
}
.blog {
  margin-left: 345px;
  width: 50%;
  border: 3px solid rgb(0, 0, 0);
  padding: 10px;
}
</style>