import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/Home.vue';
const MyNotes = import('@/components/MyNotes.vue')
const Chat = import('@/components/Chat.vue')
const Login = import('@/components/Login.vue')
const SignUp = import('@/components/SignUp.vue')

const history = createWebHistory();
const router = createRouter({
    history,
    routes:[
        {
            path:'/',
            component: Home
        },
        {
            path:'/notes',
            component: MyNotes
        },
        {
            path:'/login',
            component: Login
        },
        {
            path:'/signup',
            component: SignUp
        },
        {
            path:'/chat',
            component: Chat
        },
    ],
});

export default router;