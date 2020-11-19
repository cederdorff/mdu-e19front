<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" />
      <h3>{{ post.description }}</h3>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button>Update</button>
      </router-link>
      <button type="button" v-on:click="deletePost(post.id)">Delete</button>
    </article>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: []
    };
  },
  methods:{
    deletePost(id){
      postRef.doc(id).delete();
    }
  },
  firestore: {
    posts: postRef
  }
};
</script>

<style scoped>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}

.grid-container article {
  text-align: center;
  padding: 10px;
}

.grid-container img {
  max-width: 300px;
  width: 100%;
}

.grid-container h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}
</style>
