<template>
  <div class="blog">
    <h1>This is our blog</h1>
    <blog-post
      v-for="post in posts"
      :title="post.title"
      :description="post.description"
      :key="post.title"
    ></blog-post>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
export default {
  name: "Blog",
  components: {
    BlogPost,
  },
  data() {
    return {
      posts: [
        {
          title: "Welcome to my blog",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          title: "Hello Frontenders",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        {
          title: "Greetings",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    };
  },
};
</script>
