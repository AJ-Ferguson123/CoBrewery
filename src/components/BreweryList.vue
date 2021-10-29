<template>
    <div id="BreweryList">
        <div class="header"> 
            <img :src="require('../assets/obdb.jpg')" />           
        <h1>COLORADO</h1>
        <h1 class="list">Brewery Listing</h1>
        </div>
        
        <div id="table">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
            </tr>
            </thead>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.city}}</td>
                <td>{{item.state}}</td>
            </tr>
        </table>
        </div>
        
        
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
    name: "BreweryList",
    data() 
    {
        return {list:undefined}
    },
    mounted()
    {
        Vue.axios.get('https://api.openbrewerydb.org/breweries?')
            .then((res)=> {
                this.list=res.data;
                console.log(res)
            })
    }
}
</script>

<style>
    table, tr, td{
        border: 1px solid black;              
    } 
    table {
        border-radius: .5rem;
    }
    th {
        background-color: aquamarine;
        text-transform: uppercase;
        padding: 1rem 0;
    } 
    img {
        width: 20rem;
        border-radius: 2rem;
    }  
    .header {
        padding:.5rem 0 .5rem;
        border-radius: .3rem;
        background-color: rgb(255,188,0);
        
    }
    #table {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        border-radius: 10px;
        margin-top: .5rem;
        
        
    }
    /* .list {
        text-decoration: underline;
    } */
</style>