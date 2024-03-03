<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const { t } = useI18n()
</script>

<template>
  <NavBar />
  <div>
    <div mt-12 text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Fujifilm film simulations
      </a>
    </p>

    <div>
      <button
        m-3 text-sm btn
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
