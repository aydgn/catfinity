<template>
  <section>
    <!-- Random Cat Image -->
    <img :src="catUrl" alt="Random Cat Image" class="cat" />

    <!-- Get Random Cat Button -->
    <button @click="getCat">Get Random Cat</button>
  </section>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: "CatPage",
  data() {
    return {
      catUrl: "",
    }
  },
  beforeMount() {
    console.log("Login status", this.$store.state.loggedIn)
    console.log("LocalStoreage status", localStorage.getItem("loggedIn"))

    /* if loggedIn false redirect to login page */
    if (!this.$store.state.loggedIn && !localStorage.getItem("loggedIn")) {
      this.$router.push("/login")
    }
  },
  mounted() {
    this.getCat()
  },
  methods: {
    async getCat() {
      const response = await this.$axios.$get(
        "https://api.thecatapi.com/v1/images/search"
      )
      this.catUrl = response[0].url
    },
  },
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  margin: auto;
  max-height: 300px;
}

button {
  width: 300px;
}
</style>
