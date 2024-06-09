<template>
  <router-view />
</template>

<script setup>
import { useMeta } from 'quasar'

import getMeta from 'assets/get-meta.js'

useMeta({
  title: 'Muhammad Farhan',
  titleTemplate: title => `${title} | Muhammad Farhan`,

  meta: getMeta(
    'Muhammad Farhan- Achieve 100% functional coverage assurance by adopting high-performance Automation strategies in record time',
    'context-oriented, end-2-end test automation components for best-in-class high-performance, responsive systems of systems....'
  )
})
</script>
