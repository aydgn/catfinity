<template>
  <section class="login">
    <!-- DESCRIPTION -->
    <div class="desc">
      <h1 class="desc__title">Login🐱</h1>
      <p class="desc__content">
        Welcome to <strong>Catfinity</strong>, an app that you can lorem ipsum
        and also dolor sit amet!
      </p>
    </div>

    <!-- FORM -->
    <div class="form">
      <div class="form__input">
        <!-- USERNAME -->
        <input type="text" placeholder="Username" />
      </div>
      <div class="form__input">
        <!-- PASSWORD -->
        <input type="password" placeholder="Password" />
      </div>
      <div class="form__input">
        <!-- BUTTON -->
        <button class="form__button">Login</button>
      </div>
    </div>
  </section>
</template>

<script setup>
export default {
  layout: "login",
  head() {
    return {
      title: "Catfinity Login",
    }
  },
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
}

.form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  background: var(--color-primary-dark);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

.form__input input {
  padding: 1rem;
  border: none;
  border-bottom: 0.25rem solid #ccc;
  border-radius: 0.5rem;
  margin: 0.25rem 0;
  outline: 0;
  font-size: 1rem;
}

.form__input input:focus {
  border-bottom: 0.25rem solid var(--color-accent);
}

.form__button {
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background: var(--color-accent);
  color: #fff;
  font-size: 1rem;
  border: 0;
  border-bottom: 4px solid var(--color-primary);
}
.form__button:active {
  border-bottom: 4px solid var(--color-primar);
}

/* Tablet */
@media screen and (min-width: 600px) {
}
</style>
