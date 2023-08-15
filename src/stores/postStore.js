import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: []
  }),
  actions: {
    async fetchPosts() {
      const response = await axios.get('http://localhost:5000/posts')
      this.posts = response.data
    },
    
    async addPost(post) {
      const response = await axios.post('http://localhost:5000/posts', post)
      this.posts.push(response.data)
    },
    // ... you can add more actions for update, delete etc.
  }
})
