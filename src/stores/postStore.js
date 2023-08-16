import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [],
    loading: false,
    error: null,
    samples: [
      {
        id: 1,
        name: "Mictec",
        price: 20,
      },
    ],
  }),
  actions: {
    async fetchPosts() {
      try {
        this.loading = true;
        const response = await axios.get("http://localhost:5000/posts");

        this.posts =  response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async addPost(post) {

      try {
        const response = await axios.post("http://localhost:5000/posts", post);
        this.posts.push(response.data);
      } catch (error) {
        this.error = error.message;
      }
    },
    // ... you can add more actions for update, delete etc.
  },
});
