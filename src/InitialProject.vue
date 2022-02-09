<script>
import axios from "axios"
export default {
  data() {
    return {
        name : "InitialProject",
      projects :[]
    }
  },
  
     
mounted(){
    axios.get("http://localhost:3000/api/pr/data").then(({data})=>{
    console.log(data)
    this.projects=data
   }).catch((err)=>{
       console.log(err)
   })
      },
  }  

  
     
  



</script>

<template>
  <h1>im her </h1>
</template>

 <style>

</style>