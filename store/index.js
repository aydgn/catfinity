export const state = () => ({
  catPhotoURL: "",
  user: {
    username: "admin",
    password: "123",
  },
  loggedIn: false,
})

export const mutations = {
  setCatPhotoURL(state, payload) {
    state.catPhotoURL = payload
  },

  setLoggedIn(state, payload) {
    state.loggedIn = payload
    localStorage.setItem("loggedIn", payload)
    console.info("Logged in", state.loggedIn)
    this.$router.push({ path: "/" })
  },
  setLoggedOut(state, payload) {
    state.loggedIn = payload
    localStorage.removeItem("loggedIn")
    console.info("Logged out", state.loggedIn)
    this.$router.push({ path: "/login" })
  },
}

/* export const actions = {
  async getCatPhoto(context) {
    const data = await this.$axios
      .$get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        context.commit("setCatPhotoURL", response[0].url)
      })
      .catch((error) => {
        console.error(error)
      })
    return data
  },
} */
