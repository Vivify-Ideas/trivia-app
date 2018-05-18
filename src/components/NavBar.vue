<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Trivia App</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link
            class="nav-link"
            to="/chuck">
            Chuck
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
