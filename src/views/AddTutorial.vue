<template>
    <div class="add-tuto-container">

        <label class="add-title ">Title:</label>
        <input name="title" @input="handleChange" type="text" class="form-control shadow p-3 mb-5 bg-white rounded" placeholder="write your title...">
        
        <label class="add-budget">Budget:</label>
        <input name="budget" @input="handleChange" type="text" class="form-control shadow p-3 mb-5 bg-white rounded" placeholder="budget estimation...">

        <label class="add-field">Field:</label>
        <input name="field" @input="handleChange" type="text" class="form-control shadow p-3 mb-5 bg-white rounded" placeholder="Field of the tuto...">

        <label class="add-tuto">tutorial description:</label>
        <textarea name="tutorial" @input="handleChange" type="text" class="form-control shadow p-3 mb-5 bg-white rounded" placeholder="tutorial..."></textarea>

        <label class="add-img ">image:</label> <input @change="postImage" type="file" class=""><br/>

        <button @click="postTuto(),handlePath('Admin')" type="button" class="confirm-btn btn btn-secondary btn-lg btn-block">Confirm and SAVE</button>

    </div>
</template>

<script>
import axios from "axios"
import formdata from "form-data"

export default {
    name:'AddTutorial',
    data(){
        return {
            tutorial:{
                image:'',
                title:'',
                budget:'',
                field:'',
                tutorial:''
            }
        }
    },
    methods: {
        postImage(event){
            event.preventDefault();
            console.log(event)
            this.image= event.target.files[0]
            const formData = new formdata();
            formData.append("file",this.image)
            formData.append("upload_preset", "ehzqyvxt")

            axios
            .post("http://api.cloudinary.com/v1_1/brahamtahar/upload", formData)
            .then((result)=>{
                console.log(result)
                this.image=result.data.url
            })
        },

        handleChange(event){
            this[event.target.name] = event.target.value
        },

        postTuto(){
            axios
            .post("http://localhost:3000/api/tutorial",{
                image:this.image,
                title:this.title,
                budget:this.budget,
                field:this.field,
                tutorial:this.tutorials
            })
            .then((result)=>{
                console.log(result)
            })
        },
        handlePath(name){
            this.$router.push({name:name})
        },
    },
    
}
</script>

<style scoped>
.add-tuto-container{
    margin:2%;
    padding-bottom:2% ;
    display: flex;
    justify-content: center;
    align-items:flex-start ;
    flex-direction: column;
    font-size: larger;
}


button{
    margin-top:3%;
    align-self: center;
}

</style>