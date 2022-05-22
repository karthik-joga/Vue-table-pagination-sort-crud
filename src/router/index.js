import Vue from 'vue'
import VueRouter from 'vue-router'
import DataPrint from "../Components/DataPrint.vue"
import CreateEmployee from "../Components/CreateEmployee.vue"
import EditEmployee from "../Components/EditEmployee.vue"

Vue.use(VueRouter)

const routes=[
    {
        path:"/",
        component:DataPrint
    },
    {
        path:"/create",
        component:CreateEmployee
    },{
        path:"/edit/:id",
        component:EditEmployee
    }
]
const router=new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router