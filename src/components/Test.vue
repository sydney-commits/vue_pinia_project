<template>

import { usePostStore } from '@/path-to-your-postStore-file'

export default {
  setup() {
    const postStore = usePostStore()

    // Fetch posts when component is mounted
    onMounted(() => {
      postStore.fetchPosts()
    })

    return {
      posts: postStore.posts,
      addPost: postStore.addPost
      // ... any other methods or computed properties
    }
  }
}

</template>