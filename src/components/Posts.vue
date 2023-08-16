<template>
  <div>
    <br />

    <h2>News Posts</h2>

    <div v-if="posts?.length === 0">Loading Products</div>

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
import { usePostStore } from "../stores/postStore";

import { onMounted } from "vue";

export default {
  name: "PostList",
  setup() {
    const postStore = usePostStore();

    //const posts = postStore.fetchPosts();

    postStore.fetchPosts();
    return {
      // posts,
      posts: postStore.posts,
      error: postStore.error,
      loading: postStore.loading,
    };
  },
};
</script>
