import { createRouter, createWebHistory } from "vue-router";
import InvestorFeed from '@/views/InvestorFeed.vue';
import InitiateYourProject from '@/views/InitiateYourProject.vue';
import AboutUs from '@/views/AboutUs.vue';
import ShareYourExperience from '@/views/ShareYourExperience.vue';
import Profil from '@/views/Profil.vue';
import NotFound from '@/views/NotFound.vue';
import Admin from '@/views/Admin.vue';
import AddTutorial from '@/views/AddTutorial.vue';

const routes=[
{
    name:'InvestorFeed',
    path:'/',
    component:InvestorFeed,
    meta:{
        title:"The Wise Investor",
    }
},
{
name:'InitiateYourProject',
path:'/InitiateYourProject',
component:InitiateYourProject,
meta:{
    title:"Initiate Your Project",
}
},
{
name:'AboutUs',
path:'/About',
component:AboutUs,
meta:{
        title:"About Us",
}
},
{
    name:'ShareYourExperience',
    path:'/ShareYourExperience',
    component:ShareYourExperience,
    meta:{
            title:"Share Your Experience",
    }
    },
    {
        name:'Profil',
        path:'/Profil',
        component:Profil,
        meta:{
                title:"Profil",
        }
        },
    {
        name:'Admin',
        path:'/Admin',
        component:Admin,
        meta:{
            title:"ADMIN"
        }
    },

    {
        name:'AddTutorial',
        path:'/AddTutorial',
        component:AddTutorial,
        meta:{
            title:"Add new Tuto - ADMIN"
        }
    },

{
    name:'NotFound',
    path:'/:pathMatch(.*)',
    component:NotFound,
    meta:{
        title:"404 Not Found",
    }
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes,
})

router.afterEach((to)=>{
document.title=to.meta.title
})

export default router;