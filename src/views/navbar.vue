<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">The wise investor</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                @click="handlePath('InvestorFeed')"
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                Investor feed
              </a>
            </li>
            <li class="nav-item">
              <a
                @click="handlePath('InitiateYourProject')"
                class="nav-link active"
                href="#"
              >
                Initiate your project
              </a>
            </li>
            <li class="nav-item">
              <a
                @click="handlePath('AboutUs')"
                class="nav-link active"
                href="#"
              >
                About us
              </a>
            </li>
            <li class="nav-item">
              <a
                @click="handlePath('ShareYourExperience')"
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                Share your experience
              </a>
            </li>
            <li class="nav-item">
              <a
                @click="handlePath('Profil')"
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                Profil
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <button
              type="button"
              v-if="this.$store.state.authenticated == true"
              v-on:click="Logout()"
              class="btn btn-outline-secondary"
            >
              Log out
            </button>
            <div v-else>
              <button
                class="btn btn-primary"
                @click="handlePath('Login')"
                type="submit"
              >
                Log in
              </button>
              <button
                class="btn btn-primary"
                @click="handlePath('Signup')"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    handlePath(name) {
      this.$router.push({ name: name });
    },
    Logout() {
      this.$store.commit("setAuthentication", false);
    },
  },
};
</script>

<style>
.nav-item {
  font-size: 18px;
  padding-left: 20px;
}
.navbar-brand {
  font-size: 24px;
}
.btn {
  font-weight: 500;
}
</style>
