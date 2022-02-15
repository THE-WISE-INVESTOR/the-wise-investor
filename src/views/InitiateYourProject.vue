<script>
import Projects from './Projects.vue'
import axios from "axios"
export default {
   name:"InitialProject",
  components:{
    Projects
  },
  data() {
    return {
    name : "InitialProject",
    projects :[]
    }
  },

    
methods:{
  getData(){
  axios.get("http://localhost:3000/api/pr/data").then(({data})=>{
   console.log(data)
    this.projects=data
   }).catch((err)=>{
      console.log(err)
   })
       }
    },
    mounted(){
      this.getData()
    }
    }

</script>

<template>
<div>
  <Projects :projects="projects" /> 
  </div>
</template>

 <style>
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}
</style>