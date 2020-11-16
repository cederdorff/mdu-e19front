<template>
  <section>
    <article v-for="user in users" :key="user.name">
      <h3>{{ user.name }}</h3>
      <a :href="`mailto:${user.mail}`">{{ user.mail }}</a>
    </article>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      users: [
        { name: "Birgitte", mail: "bki@eaaa.dk" },
        { name: "Martin", mail: "mnor@eaaa.dk" },
        { name: "Rasmus", mail: "race@eaaa.dk" }
      ]
    };
  }
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
}
</style>
