<template>
  <header>
    <h1>Catfinity 🐱</h1>
    <button @click="logOut">Log Out</button>
  </header>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.commit("setLoggedOut", false)
    },
  },
}
</script>

<style scoped>
header {
  border-top: 4px solid var(--color-accent);
  border-bottom: 4px solid var(--color-primary-dark);
  background: var(--color-primary);
  text-align: center;
  color: #fff;
  padding: 0 1rem;
}
h1 {
  font-size: 3rem;
}
</style>
