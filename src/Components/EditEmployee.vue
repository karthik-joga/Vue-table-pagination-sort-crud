<template>
    <div >
        <v-app-bar app flat class="purple" >
        <div class="white--text text-h5" id="logo">
            Update Employee Details
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
               
               <v-btn @click="upload"  elevation="0" plain outlined class="purple--text ml-2">Upload</v-btn>
            
        </v-form>
</v-container>

    </div>
</template>

<script>
import Axios from "axios"
import Vue from 'vue'

export default{
    name:"CreateEmployee",
    data(){
        return{
             key:this.$route.params.id,
            formdata:{
                name:"",
                age:"",
                gender:"",
                contact:0,
                experience:"",
                designation:""
            }
        }
    },
    methods:{
       async get(){
             let a=await Axios.get(`http://localhost:4000/Employee/${this.key}`)
        this.formdata.name=a.data.name,
        this.formdata.age=a.data.age,
        this.formdata.gender=a.data.gender,
        this.formdata.contact=a.data.contact,
        this.formdata.experience=a.data.experience,
        this.formdata.designation=a.data.designation
       
        },
        async upload(){
            let b=await Axios.put(`http://localhost:4000/Employee/${this.key}`,this.formdata)
            console.log(b.data)
            Vue.$vToastify.success("successfully Employee data Updated")
        }
    },
    created(){
       this.get()
    }
}
</script>