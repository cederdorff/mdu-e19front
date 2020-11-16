<template>
  <div class="contact">
    <h1>This is an about page</h1>
    <h2>All our users</h2>
    <user-list></user-list>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
export default {
  name: "Contact",
  components: {
    UserList
  }
};
</script>
