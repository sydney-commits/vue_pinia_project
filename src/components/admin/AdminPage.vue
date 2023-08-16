<template>
  This Is the Admin page
  <form @submit.prevent="handlesave">
    <div>
      <label> Id</label>
      <input type="text" v-model="post.id" />
      <br />
      <label> Title</label>
      <input v-model="post.title" />
      <br />

      <label> Description</label>

      <br />
    </div>
  </form>
</template>

<style scoped></style>

<script>
import { usePostStore } from "@/stores/postStore";
import { ref } from "vue";

export default {
  setup() {
    const postStore = usePostStore();
    const newPost = ref("");

    const handlesave = () => {
      if (newPost.value.length > 0) {
        postStore.newPost({
          title: newPost.value,
          id: newPost.value,
        });

        newPost.value = "";
      }
    };

    return { handlesave, newPost };
  },
};
</script>
