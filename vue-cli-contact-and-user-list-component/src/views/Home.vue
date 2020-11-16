<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <contact-info></contact-info>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ContactInfo
  }
};
</script>
