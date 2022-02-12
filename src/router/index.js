import { createRouter, createWebHistory } from "vue-router";
import InvestorFeed from '@/views/InvestorFeed.vue';
import InitiateYourProject from '@/views/InitiateYourProject.vue';
import AboutUs from '@/views/AboutUs.vue';
import ShareYourExperience from '@/views/ShareYourExperience.vue';
import Profil from '@/views/Profil.vue';
import NotFound from '@/views/NotFound.vue';

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
path:'/initiateyourproject',
component:InitiateYourProject,
meta:{
    title:"Initiate Your Project",
}
},
{
name:'AboutUs',
path:'/about',
component:AboutUs,
meta:{
        title:"About Us",
}
},
{
    name:'ShareYourExperience',
    path:'/shareyourexperience',
    component:ShareYourExperience,
    meta:{
            title:"Share Your Experience",
    }
    },
    {
        name:'Profil',
        path:'/profil',
        component:Profil,
        meta:{
                title:"Profil",
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



export default router;