import { createRouter, createWebHistory } from "vue-router";
import InvestorFeed from "@/views/InvestorFeed.vue";
import InitiateYourProject from "@/views/InitiateYourProject.vue";
import AboutUs from "@/views/AboutUs.vue";
import ShareYourExperience from "@/views/ShareYourExperience.vue";
import Profil from "@/views/Profil.vue";
import NotFound from "@/views/NotFound.vue";
import Admin from "@/views/Admin.vue";
import AddTutorial from "@/views/AddTutorial.vue";
import store from "@/store/index.js";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Tuto from "@/views/Tuto.vue";
const routes = [
  {
    name: "Tuto",
    path: "/Tuto/:id",
    component: Tuto,
    props: true,
    meta: {
      title: "Tutorial",
    },
  },

  {
    name: "InvestorFeed",
    path: "/",
    component: InvestorFeed,
    meta: {
      title: "The Wise Investor",
    },
  },
  {
    name: "InitiateYourProject",
    path: "/initiateyourproject",
    component: InitiateYourProject,
    meta: {
      title: "Initiate Your Project",
    },
  },
  {
    name: "AboutUs",
    path: "/about",
    component: AboutUs,
    meta: {
      title: "About Us",
    },
  },
  {
    name: "ShareYourExperience",
    path: "/shareyourexperience",
    component: ShareYourExperience,
    meta: {
      title: "Share Your Experience",
    },
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next(false);
      } else {
        next();
      }
    },
  },
  {
    name: "Profil",
    path: "/profil",
    component: Profil,
    meta: {
      title: "Profil",
    },
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next(false);
      } else {
        next();
      }
    },
  },
  {
    name: "Admin",
    path: "/Admin",
    component: Admin,
    meta: {
      title: "ADMIN",
    },
  },

  {
    name: "AddTutorial",
    path: "/AddTutorial",
    component: AddTutorial,
    meta: {
      title: "Add new Tuto - ADMIN",
    },
  },
  {
    name: "Login",
    path: "/Login",
    component: Login,
    meta: {
      title: "Log in",
    },
  },
  {
    name: "Signup",
    path: "/Signup",
    component: Signup,
    meta: {
      title: "Sign up",
    },
  },

  {
    name: "NotFound",
    path: "/:pathMatch(.*)",
    component: NotFound,
    meta: {
      title: "404 Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
