<template>
  <transition name="fade">
    <div class="form">
      <div class="form__input">
        <!-- USERNAME -->
        <input
          v-model="user.username"
          type="text"
          placeholder='"admin"'
          autofocus
        />
      </div>
      <div class="form__input">
        <!-- PASSWORD -->
        <input v-model="user.password" type="password" placeholder='"123"' />
      </div>
      <div class="form__input">
        <!-- BUTTON -->
        <button class="form__button" @click="submit">Login</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    }
  },
  methods: {
    submit() {
      if (
        this.user.username === this.$store.state.user.username &&
        this.user.password === this.$store.state.user.password
      ) {
        this.$store.commit("setLoggedIn", true)
      } else {
        alert("Invalid username or password")
      }
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--color-primary-dark);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

.form__input input {
  padding: 0.5rem;
  border: none;
  border-bottom: 0.25rem solid #ccc;
  border-radius: 0.5rem;
  margin: 0.25rem 0;
  outline: 0;
  font-size: 1rem;
  width: 100%;
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
  width: 100%;
}
.form__button:active {
  border-bottom: 4px solid var(--color-primary-dark);
}

/* Mobile -> Tablet */
@media screen and (min-width: 400px) {
  .form {
    padding: 2rem;
  }

  .form__input input {
    padding: 1rem;
  }
}
</style>
