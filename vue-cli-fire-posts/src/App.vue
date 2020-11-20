<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  --primary: #2c3e50;
  --secondary: #42b983;
  --danger: #b94242;
  --text-color-light: #f1f1f1;
  --text-color-dark: #333;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--primary);
}

#nav a.router-link-exact-active {
  color: var(--secondary);
}

button {
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 12px 15px;
  font-size: 1em;
  border-radius: 0;
  color: var(--text-color-light);
  background-color: var(--secondary);
  width: 100%;
  max-width: 350px;
}
</style>
