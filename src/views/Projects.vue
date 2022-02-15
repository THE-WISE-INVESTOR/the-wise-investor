<script>
export default {
  name: "Projects",
  props: ["projects"],
  components: {},
  data() {
    return {
      search: "",
      myBudget: 0,
    };
  },
  computed: {
    bysearch: function () {
      var x = parseInt(this.search);
      if (isNaN(x) == false) {
        return this.projects.filter((elem) => {
          return elem.budget < parseInt(this.search);
        });
      } else {
        return this.projects.filter((elem) => {
          return elem.field.toLowerCase().match(this.search.toLowerCase());
        });
      }
    },
    byBudget: function () {
      return this.projects.filter((elem) => {
        return elem.budget < this.myBudget;
      });
    },
  },

  mounted() {
    console.log("hello");
  },
  methods: {
    handlePath(name, title, tutorial, id) {
      this.$router.push({
        name: name,
        params: { title: title, tutorial: tutorial, id: id },
      });
    },
  },
};
</script>
<template>
  <br />
  <br />
  <h1 class="center">Project list</h1>
  <input v-model="search" type="search" id="form1" class="form-control" />

  <br />
  <br />

  <div class="parent centerdiv">
    <div v-for="project in bysearch" :key="project.id">
      <div class="card" style="width: 22rem">
        <div class="a">
          <img class="card-img-top" v-bind:src="project.image" />
          <div class="card-body">
            <h2 class="card-title">{{ project.title }}</h2>
            <h3 class="card-text">{{ project.field }}</h3>
            <h3 class="card-text">{{ project.budget + "$" }}</h3>
            <button
              class="btn btn-dark btn-rounded"
              @click="
                handlePath('Tuto', project.title, project.tutorial, project._id)
              "
            >
              tutorial
            </button>
          </div>
        </div>
        <!-- <div>{{message}}</div> -->
      </div>
    </div>
  </div>
  <!-- <div v-for="project in projects" :key='project.id'> -->
  <!-- <Tuto :project="project"/> -->
  <!-- </div> -->
</template>
<style scoped>
.center {
  text-align: center;
}

.centerdiv {
  margin-left: 225px;
  width: 50%;
  padding: 10px;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
}
.form-control {
  margin-left: 500px;
  margin-right: 100px;
  width: 500px;
}
</style>
