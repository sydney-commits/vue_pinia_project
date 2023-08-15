<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand">User Blog</div>
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/" class="nav-link" exact-active-class="active"
          >Home</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link" exact-active-class="active"
          >About</router-link
        >
      </li>

      <li class="nav-item">
        <router-link to="/posts" class="nav-link" exact-active-class="active"
          >Post</router-link
        >
      </li>

      <li class="nav-item">
        <router-link to="/admin" class="nav-link" exact-active-class="active"
          >Admin Panel</router-link
        >
      </li>
    </ul>
  </nav>

  <router-view />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #333;
  color: white;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.nav-item {
}

.nav-link {
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.active {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
