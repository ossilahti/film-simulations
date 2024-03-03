<!-- eslint-disable vue/order-in-components -->
<script>
export default {
  data() {
    return {
      recipes: [],
    }
  },
  methods: {
    async fetchRecipes() {
      try {
        const response = await fetch('http://localhost:3333/x-trans/i')
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`)

        const data = await response.json()
        this.recipes = data
      }
      catch (error) {
        console.error('Error fetching recipes:', error)
      }
    },
  },
  mounted() {
    // Call fetchRecipes when the component is mounted
    this.fetchRecipes()
  },
}
</script>

<template>
  <NavBar />
  <div>
    <div mt-12 text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <ul>
      <li v-for="item in recipes" :key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Fujifilm film simulations
      </a>
    </p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
