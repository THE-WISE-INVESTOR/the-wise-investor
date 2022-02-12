<template>
  <div>
    <button
      @click="addButton('AddTutorial')"
      type="button"
      class="add-btn btn btn-outline-primary"
    >
      Add new Tutorial
    </button>
    <ul>
      <li
        class="tuto-container shadow-lg p-3 mb-5 bg-white rounded"
        v-for="tuto in tutorials"
        :key="tuto._id"
      >
        <h2 class="tuto-title">{{ tuto.title }}</h2>
        <img class="tuto-img" src="{{tuto.image}}" alt="tuto-image" />
        <p class="tuto-content">{{ tuto.tutorial }}</p>
        <h6 class="tuto-budget">The Budget : {{ tuto.budget }}</h6>
        <button
          @click="handleDelete(tuto._id)"
          class="delete-btn btn btn-outline-danger"
        >
          Delete Tuto
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "admin",
  data() {
    return {
      tutorials: [],
      id: "",
    };
  },

  methods: {
    getTutos() {
      axios.get("http://localhost:3000/api/tutos").then(({ data }) => {
        console.log(data);
        this.tutorials = data;
      });
    },

    addButton(name) {
      this.$router.push({ name: name });
    },

    handleDelete(id) {
      axios
        .delete(`http://localhost:3000/api/tutorial/del/${id}`, {
          _id: this.id,
        })
        .then((response) => {
          console.log(response);
          alert(`Tutorial : ${this.tuto.name}`);
          location.reload();
        });
    },
  },
  mounted() {
    this.getTutos();
  },
};
</script>

<style scoped>
.tuto-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-right: 2rem;
  margin-left: 0.7rem;
  border: solid 2px rgba(#000, 0.2);
}

.add-btn {
  margin-top: 2%;
  margin-left: 10%;
}

.delete-btn {
  align-self: flex-end;
  margin-right: 1px;
  margin-bottom: 1px;
}
</style>
