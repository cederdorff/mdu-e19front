<template>
  <div class="home">
    <h1>Vue Fire Post App</h1>
    <post-list></post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "../components/PostList.vue";
export default {
  name: "Home",
  components: {
    PostList
  }
};
</script>
