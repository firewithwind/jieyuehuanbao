<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我们</router-link>
    </div>
  </div>
</template>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  line-height: 50px;
  background-color: #70d486;
  flex: 1;
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>
