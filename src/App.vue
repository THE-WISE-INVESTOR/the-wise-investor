<template>
  <h1>hello world</h1>
  <input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>Agriculture</option>
  <option>Biology</option>
  <option>Chemistry</option>
</select>
<span>Selected: {{ selected }}</span>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
