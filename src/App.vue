<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link> |
      <router-link to="/lifeCycle">lifeCycle</router-link> |
      <router-link to="/about">about</router-link> |
      <router-link to="/router">router</router-link> |
      <router-link to="/vuex">vuex</router-link> |
      <router-link to="/axios">axios</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
