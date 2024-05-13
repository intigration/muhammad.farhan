<template>
  <div class="sponsor">
    <a v-if="props.href" :href="props.href" target="_blank" class="cursor-pointer block full-height">
      <q-img :src="logoUrl" :alt="props.name" height="100%" fit="contain" />
    </a>
    <q-img v-else :src="logoUrl" :alt="props.name" height="100%" fit="contain" />
 
    <div class="text-grey text-italic q-mt-xs team-member__role">{{ props.name }}</div>

 </div>
</template>

<script setup>
import { computed } from 'vue'
import { Dark } from 'quasar'

const props = defineProps({
  src: String,
  name: String,
  href: String
})

const logoUrl = computed(() => `https://raw.githubusercontent.com/genislab/devicon/master/icons/${ props.src }/${ props.src }-original.svg`)
</script>

<style lang="sass">
.team-member
  width: 12.2rem

  &__role
    height: 42px

  .q-img__image
    filter: grayscale(100%)

  &__front
    min-height: 300px

  @media (max-width: $breakpoint-xs-max)
    width: 100%
    min-height: 640px

.sponsor
  box-sizing: content-box
  max-height: 80px
  max-width: 200px
  padding: map-get($space-md, 'x')
  width: 100%

  @media (min-width: $breakpoint-sm-min)
    max-height: 120px
</style>
