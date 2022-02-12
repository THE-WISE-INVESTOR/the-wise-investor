<template>
  <div class="add-tuto-container">
    <label class="add-img">image:</label>
    <input @change="postImage" type="file" />

    <label class="add-title">Title:</label>
    <input
      name="title"
      @input="handleChange"
      type="text"
      class="form-control"
      placeholder="write your title..."
    />

    <label class="add-tuto">blog:</label>
    <textarea
      name="text"
      @input="handleChange"
      type="text"
      class="form-control"
      placeholder="blog..."
    ></textarea>

    <button
      @click="postTuto()"
      type="button"
      class="confirm-btn btn btn-secondary btn-lg btn-block"
    >
      Confirm and SAVE
    </button>
  </div>
</template>

<script>
import axios from "axios";
import formdata from "form-data";

export default {
  name: "AddBLOG",
  data() {
    return {
      BLOG: {
        title: "",
        image: "",
        text: "",
      },
    };
  },
  methods: {
    postImage(event) {
      console.log(event);
      this.image = event.target.files[0];
      const formData = new formdata();
      formData.append("file", this.image);
      formData.append("upload_preset", "ehzqyvxt");

      axios
        .post("http://api.cloudinary.com/v1_1/brahamtahar/upload", formData)
        .then((result) => {
          console.log(result);
          this.image = result.data.url;
        });
    },

    handleChange(event) {
      this[event.target.name] = event.target.value;
    },

    postTuto() {
      console.log(this.text, "this is the text");
      axios
        .post("http://localhost:3000/api/profile/postblog", {
          title: this.title,
          image: this.image,
          text: this.text,
        })
        .then((result) => {
          console.log(result, "this is result");
        });
    },
  },
};
</script>

<style scoped>
.add-tuto-container {
  margin: 2%;
  padding-bottom: 2%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: larger;
}

label {
  margin-top: 2%;
}

button {
  margin-top: 3%;
}
</style>
