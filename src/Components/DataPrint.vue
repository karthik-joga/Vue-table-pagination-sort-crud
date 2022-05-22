<template>
<div class="mt-2">
    <v-btn v-show="asc" @click="handleasc" elevation="0" plain outlined class="purple--text ml-2">Ascending</v-btn> 
    <v-btn plain outlined class="purple--text" v-show="desc" @click="handledesc" elevation="0">Decending</v-btn>
<v-simple-table>
<thead>
    <tr >
        <th class="text-h6 text-darken-4">Name</th>
        <th class="text-h6">Age</th>
        <th class="text-h6">Gender</th>
        <th class="text-h6">Contact number</th>
        <th class="text-h6">Experience</th>
        <th class="text-h6">Designation</th>
        <th class="text-h6">Edit</th>
        <th class="text-h6">Delete</th>
    </tr>
</thead>
<tbody>
    <tr v-for="empl in printdata" :key="empl.id">
    <td>{{empl.name}}</td>
    <td>{{empl.age}}</td>
    <td>{{empl.gender}}</td>
    <td>{{empl.contact}}</td>
    <td>{{empl.experience}}</td>
    <td>{{empl.designation}}</td>
    <td><v-btn @click="handleEdit(empl.id)" plain outlined class="purple--text">Edit</v-btn></td>
    <td><v-btn @click="remove(empl.id)" plain outlined class="purple--text">Delete</v-btn></td>
    </tr>
</tbody>
</v-simple-table>
<v-footer>
    <div class=" d-flex mx-auto">
        <div>
             <v-combobox
          v-model="select"
          :items="items"
          dense
          @change="pagination"
        ></v-combobox>
        </div>
        <div v-for="index in loop" :key="index" >
            <v-btn @click="clickevent(index)" class="purple white--text ml-5" fab  elevation="0" plain outlined small>{{index}}</v-btn>
        </div>
    </div>
</v-footer>
</div>
</template>

<script>
import Axios from 'axios'
import Vue from 'vue'

export default{
    
    data(){
        return{
            items:[5,10,15],
            select:5,
            employee:[],
            printdata:[],
            asc:true,
            desc:false,
           loop:0
        }

    },
    methods:{
        async take(){
          let  a=await Axios.get("http://localhost:4000/Employee")
          console.log(a.data.length)
        this.employee=a.data
        this.pagination()
       
        },
        remove(num){
            Axios.delete(`http://localhost:4000/Employee/${num}`)
            this.take()
            this.pagination()
            Vue.$vToastify.success("successfully Employee data Deleted")
        },
        handleEdit(id){
            this.$router.push(`/edit/${id}`)
        },
        handleasc(){
            this.desc=true,
            this.asc=false,
            this.printdata.sort((fir,sec)=> fir.name.toLowerCase() > sec.name.toLowerCase() ? 1 : -1)
        },
        handledesc(){
            this.desc=false,
            this.asc=true,
            this.printdata.reverse()
        },

        pagination(){
 console.log(this.select)
        let val=this.employee.length/this.select
        if(Number.isInteger(val)){
            this.loop=val;
        }
        else{
            this.loop=Math.trunc(val)+1
        }
  console.log(this.loop)
       this.printdata=this.employee.slice(0,this.select)
       console.log(this.printdata)
        },

        clickevent(num){
            let a=this.select*num
            this.printdata=this.employee.slice(a-this.select,a)
        }
    }, 
     beforeMount(){
       this.take()
       
    },
    
}

</script>