<template>
  <router-view />
</template>

<script setup>
import { useMeta } from 'quasar'

import getMeta from 'assets/get-meta.js'

useMeta({
  title: 'Genislab Technologies',
  titleTemplate: title => `${title} | Genislab Technologies`,

  meta: getMeta(
    'Genislab Technologies- Achieve 100% functional coverage assurance bu adopting high-performance Automation strategies from genis team in record time',
    'context-oriented, end-2-end test automation components for best-in-class high-performance, responsive systems of systems. Productive people choose us..'
  )
})
</script>
