<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />

    <h2>Posts Page</h2>

    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>

    <button @click="addPost">Add New Post</button>
  </div>
</template>

<style scoped></style>

<script>
import { usePostStore } from "../stores/postStore.js";
import { onMounted } from "vue";

export default {
  setup() {
    const postStore = usePostStore();

    // Fetch posts when component is mounted
    onMounted(() => {
      postStore.fetchPosts();
    });

    return {
      posts: postStore.posts,
      addPost: postStore.addPost,
      // ... any other methods or computed properties
    };
  },
};
</script>
