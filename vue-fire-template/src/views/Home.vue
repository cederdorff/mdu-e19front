<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
