import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'bootstrap-vue'

<script setup lang="ts">
defineOptions({
  name: 'FilmSimulations',
})

const router = useRouter()
function goTo(model: string) {
  router.push(`x-trans/${model}`)
}
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- <b-navbar-brand href="#">B</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="px-4" href="#" icon-btn @click="goTo('i')">
            Trans-I
          </b-nav-item>
          <b-nav-item class="px-4" href="#" icon-btn @click="goTo('ii')">
            Trans-II
          </b-nav-item>
          <b-nav-item class="px-4" href="#" icon-btn @click="goTo('iii')">
            Trans-III
          </b-nav-item>
          <b-nav-item class="px-4" href="#" icon-btn @click="goTo('iv')">
            Trans-IV
          </b-nav-item>
          <b-nav-item class="px-4" href="#" icon-btn @click="goTo('v')">
            Trans-V
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" />
      </b-collapse>
    </b-navbar>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
