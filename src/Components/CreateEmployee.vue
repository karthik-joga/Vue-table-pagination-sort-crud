<template>
    <div >
        <v-app-bar app flat class="purple" >
        <div class="white--text text-h5 ml-5" id="logo">
            Create Employee
        </div>
        </v-app-bar>
        <v-container >
        <v-form class="px-16 mt-5">
                <v-text-field color="purple" label="Name"  v-model="formdata.name"></v-text-field>
               <v-text-field label="Age" color="purple" v-model="formdata.age"></v-text-field>
               <label for="gender" >
                   Gender-
               </label>
               <input type="radio" v-model="formdata.gender" id="gender" value="male" name="gender" class="mx-3" style="font-color:orange">   Male
               <input type="radio" id="gender" value="female" v-model="formdata.gender" name="gender" class="mx-3">   Female
               <input type="radio" id="gender" value="transgender" v-model="formdata.gender" name="gender" class="mx-3">Others

               <v-text-field color="purple" label="Contact Number" width="50" v-model="formdata.contact"></v-text-field>
               <v-text-field color="purple" label="Experience" width="50" v-model="formdata.experience"></v-text-field>
               <v-text-field color="purple" label="Designation" width="50" v-model="formdata.designation"></v-text-field>
               
               <v-btn @click="submitform"  elevation="0" plain outlined class="purple--text ml-2">Submit</v-btn>
            
        </v-form>
</v-container>
    </div>
</template>

<script>
import Axios from "axios"
import router from '../router'
import Vue from "vue"
export default{
    name:"CreateEmployee",
    data(){
        return{
            formdata:{
                name:"",
                age:"",
                gender:"",
                contact:"",
                experience:"",
                designation:""
            }
        }
    },
    methods:{
        submitform(){
            Axios.post("http://localhost:4000/Employee",this.formdata).then(response=>{console.log(response.data)}).catch(err=>console.log(err))
            router.push('/')
            Vue.$vToastify.success("successfully Employee data Added")
            
        }
    },
   
}
</script>