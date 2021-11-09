<template>
  <div>
    <input type="text" v-model="searchText">
    <!-- <ul>
      <li v-for="(v,i) in searchData" :key="i">
        {{ v[0] }}
      </li>
    </ul> -->
    <List  border size="small">
      <ListItem  v-for="(v,i) in searchData" :key="i">
        {{ v[0] }}
      </ListItem>
    </List>
  </div>
</template>
<script>
const axios = require('axios');
export default {
  data() {
    return {
      searchText:"",
      searchData:[]
    }
  },
  watch:{
    searchText:function( newValue, oldValue ){
      this.init()
    }
  },
  methods: {
    init() {
      axios.get(
        `apiSearch?q=${this.searchText}&cp=2&client=gws-wiz&xssi=t&hl=zh-CN&authuser=0&pq=%E8%B0%B7%E6%AD%8C&psi=E7lxYa6ECJWHjLsPq5mb0A0.1634842900129&dpr=1`
      )
      .then((response)=>{
        // handle success
        console.log(response.data);
        
        let data = JSON.parse(response.data.split("'")[1])[0]
      
        this.searchData = data
       
      })
      .catch((error)=>{
        // handle error
        console.log(error);
      })
      .then(() =>{
        // always executed
        console.log("always executed");
      });
    },
  },
}
</script>