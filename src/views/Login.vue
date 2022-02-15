<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Email :</label>
      <input type="email" v-model="email" required />

      <label>Password :</label>
      <input type="password" v-model="password" required />
      <!-- <div v-if="passwordError" class="error">{{ passwordError }}</div> -->
      <!-- <div v-if="passwordError" class="error">{{ passwordError }}</div> -->
      <!-- <label>Role :</label>
      <select v-model="role">
        <option value="designer">Looking for a project</option>
        <option value="developer">
          Looking for the good advice to enhance your existing project
        </option>
      </select> -->

      <!-- <div>
        <input type="checkbox" value="highschool" v-model="education" />
        <label>High School</label>
        <input type="checkbox" value="bechelors" v-model="education" />
        <label>Bachelor's Degree</label>
        <input type="checkbox" value="masters" v-model="education" />
        <label>Master's Degree</label>
      </div> -->

      <div class="button">
        <button class="submit" type="submit" @click="handleSubmit">
          Log in
        </button>
      </div>
    </form>
    <!-- 
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>
      Education:
      <span v-for="edu in education" :key="edu">{{ edu }}</span>
    </p> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    handleSubmit() {
      var login = {
        email: this.email,
        password: this.password,
      };
      this.$router.push({ name: "InvestorFeed" });
      //Validate password field length
      //   this.password.length > 6
      //     ? ""
      //     : "Password should be more than 6 characters long!";
      // if (!this.passwordError) {
      // console.log(this.email);
      // console.log(this.password);
      // console.log(this.role);
      // console.log(this.education);
      // console.log(this.terms);
      axios
        .post("http://localhost:3000/api/user/login", login)
        .then((response) => {
          console.log(response.data);
          this.$store.commit("setAuthentication", true);
          this.user = response.data;
          localStorage.setItem("user", JSON.stringify(this.user));
        })
        .catch((error) => {
          console.log(error);
        });
      // }
      //  },
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: bordre-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  background: #eee;
}

button {
  background: rgb(7, 24, 7);
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0000;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
