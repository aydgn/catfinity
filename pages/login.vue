<template>
  <section class="login">
    <!-- DESCRIPTION -->
    <div class="desc">
      <h1 class="desc__title">Login 🐱</h1>
      <p class="desc__content">
        Welcome to <strong>Catfinity</strong>, an app that you can lorem ipsum
        and also dolor sit amet!
      </p>
    </div>

    <!-- FORM -->
    <Form />
  </section>
</template>

<script>
export default {
  layout: "login",
  head() {
    return {
      title: "Login",
    }
  },
}
</script>

<style scoped>
.login {
  border-top: 4px solid var(--color-accent);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  align-content: center;
  background: var(--color-primary);
  color: #eee;
  height: 100vh;
}

.desc {
  max-width: 300px;
  padding: 1rem;
}

.desc__title {
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -2px;
}
</style>
