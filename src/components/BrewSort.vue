<template>
<div id="sort" v-cloak>  
  <table>   
    <tbody>
      <tr v-for="method in methods" :key={method}>
        <td>{{item.name}}</td>
        <td>{{item.city}}</td>
        <td>{{item.state}}</td>
      </tr>
    </tbody>
  </table>  
  <p>
  <button @click="prevPage" :disabled="cantGoBack">Previous</button> 
  <button @click="nextPage">Next</button>
  </p>
  
  <!-- debug: sort={{currentSort}}, dir={{currentSortDir}}, page={{currentPage}}, {{ sortStr }} -->
</div>

</template>

<script>
import Vue from 'vue'


const sort = new Vue({
  el:'#sort',
  data:{
    currentSort:'name',
    currentSortDir:'asc',
    pageSize:20, 
    currentPage:1
  },
  methods:{
    sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      } else this.currentSortDir = 'asc';
      this.currentSort = s;
    },
    nextPage:function() {
      this.currentPage++;
    },
    prevPage:function() {
      if(this.currentPage > 1) this.currentPage--;
    }
  },
  asyncComputed: {
    async breweries() {
      let data = await fetch(`https://api.openbrewerydb.org/breweries?page=${this.currentPage}&per_page=${this.pageSize}&sort=${this.sortStr}`);
      let result = await data.json(); 
      return result;
    }
  },
  computed:{
    cantGoBack() {
      return this.currentPage === 1;
    },
    sortStr() {
      let s = '';
      if(this.currentSortDir === 'desc') s += '-';
      return s + this.currentSort;
    }
  }
})

export default sort;
</script>

<style>
button {
  color: #2c2c2c;
  background: #ececec;
  display: inline-block;
  padding: 5px 15px;
  font-size: 24px;
  border-width: 2px;
  border-style: solid;
  border-color: #34495e;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
}
</style>
