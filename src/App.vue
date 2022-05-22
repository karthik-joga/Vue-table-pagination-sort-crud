<template>
<v-app >
    <v-app-bar app flat class="purple" >
        <div class="white--text text-h5" id="logo">
            Employee Details
        </div>
        <v-spacer></v-spacer>
        <div id="create">
            <router-link to="/create" class="text-decoration-none"> 
                <v-btn class="white--text" plain elevation="0" outlined>Create Employee</v-btn> </router-link>
        </div>
    </v-app-bar>

    <v-main>
    <router-view></router-view>
    </v-main>
</v-app>
</template>

<script>
export default{
    mounted(){
        let a=document.getElementById("create")
        a.style.display=""
    }
}
</script>