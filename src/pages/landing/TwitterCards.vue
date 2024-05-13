<template>
  <div class="twitter-cards row no-wrap relative-position">
    <div
      class="twitter-cards__content col row items-stretch no-wrap q-pa-xl"
      ref="contentRef"
      @scroll="updateArrows"
    >
      <q-card
        v-for="tweet in tweetsList"
        :key="tweet.id"
        class="twitter-cards__entry bg-white text-dark column q-ma-md"
      >
        <q-card-section class="row items-center no-wrap">
          <q-avatar class="q-mr-sm">
            <q-img :src="tweet.avatar" />
          </q-avatar>
          <div class="col">
            <div class="text-weight-bold">{{ tweet.author }} {{ tweet.handle }}</div>
            <div class="twitter-cards__stamp text-grey-8">@{{ tweet.avatar }}</div>
            <div class="text-weight-bold">{{ tweet.Title }} </div>

          </div>
          <q-icon :name="fabLinkedin" size="24px" color="blue" class="float-right" />
        </q-card-section>

        <q-card-section class="q-py-none col">
          <div>{{ tweet.message }}</div>
          <div class="twitter-cards__stamp text-grey-8 q-pt-sm">{{ tweet.stamp }}</div>
        </q-card-section>

        <q-card-section>
          <q-btn
            class="twitter-cards__read-btn text-weight-bold full-width"
            :href="tweet.link"
            target="_blank"
            label="Read on LinkedIn"
            size="12px"
            padding=""
            no-caps
            flat
            color="blue-8"
          />
        </q-card-section>
      </q-card>

      <q-resize-observer @resize="updateArrows" debounce="0" />
    </div>

    <div
      class="twitter-cards__arrow twitter-cards__arrow--left cursor-pointer absolute-left row items-center"
      :class="leftArrowClass"
      @click="scrollToStart"
    >
      <q-icon
        :name="mdiChevronLeft"
        size="56px"
        color="brand-primary"
      />
    </div>

    <div
      class="twitter-cards__arrow twitter-cards__arrow--right cursor-pointer absolute-right row items-center"
      :class="rightArrowClass"
      @click="scrollToEnd"
    >
      <q-icon
        :name="mdiChevronRight"
        size="56px"
        color="brand-primary"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { fabLinkedin } from '@quasar/extras/fontawesome-v5'
import { mdiChevronLeft, mdiChevronRight } from '@quasar/extras/mdi-v7'

const hiddenArrowClass = 'twitter-cards__arrow--hidden'

const contentRef = ref(null)
const leftArrowClass = ref(hiddenArrowClass)
const rightArrowClass = ref(null)

function scrollToStart () {
  scrollTo(-1)
}

function scrollToEnd () {
  scrollTo(1)
}

function scrollTo (direction) {
  const el = contentRef.value
  if (el) {
    const { scrollLeft, offsetWidth } = el
    const modulo = scrollLeft % 332

    const left = direction === -1 && modulo !== 0
      ? scrollLeft - modulo
      : (
          (scrollLeft - modulo) +
          direction * 332 * Math.max(1, Math.floor(offsetWidth / 332))
        )

    el.scrollTo({ left, behavior: 'smooth' })
  }
}

let arrowsTimer, lastTime = 0

const updateArrows = () => {
  clearTimeout(arrowsTimer)
  if (Date.now() - lastTime > 150) {
    localUpdateArrows()
  }
  else {
    arrowsTimer = setTimeout(localUpdateArrows, 50)
  }
}

function localUpdateArrows () {
  const el = contentRef.value
  if (el) {
    lastTime = Date.now()
    const { scrollLeft, offsetWidth, scrollWidth } = el
    leftArrowClass.value = scrollLeft <= 0 ? hiddenArrowClass : null
    rightArrowClass.value = scrollLeft + offsetWidth >= scrollWidth ? hiddenArrowClass : null
  }
}

const tweetsList = [
  {
    author: "Naseer",
    handle: "Ahmed",
    avatar: "ibex",
    Title: "Software Quality Assurance Architect",
    message: "I am pleased to provide this recommendation for Muhammad Farhan, who I have had the privilege of working with closely during his tenure as the leader of the QA team at Sensys. Farhan consistently demonstrated exceptional skills in team and task management, making significant contributions to the success of projects. He fostered a positive working environment and actively supported his colleagues, embodying the qualities of a true team player.  I highly recommend Farhan for any roles where his skills in team and task management are valued. He has experience managing large to medium-sized teams and has demonstrated proficiency in areas such as big data and warehouse testing, ETL verification, and cybersecurity. Farhan's analytical and critical thinking skills, coupled with his technical communication abilities, make him well-equipped to build strong relationships with customers and management teams. During his tenure managing teams, Farhan effectively utilized prompts and RAG (Red, Amber, Green) indicators to enhance visibility and preemptively address potential issues.   Additionally, Farhan's expertise in designing and defining processes ensures that quality is never compromised. He has a proven track record of delivering high-quality results while leading and managing team. He is a dedicated professional who consistently delivers exceptional results, and I wholeheartedly recommend him for any position that values leadership, teamwork, and quality-driven outcomes",
    stamp: "03/20/24, 02:16 PM",
    id: "VISIBLE"
  },
  {
    author: "Shay",
    handle: "Benchorin",
    avatar: "Siemens Factory Automation",
    Title: "Director Technology & Innovation Advanced AI Systems",
    message: "During his eight-year tenure, Farhan consistently demonstrated a remarkable ability to understand the big picture with attention to details, analytical mindset, and strong leadership.   Farhan greatly contributed to streamlining our quality processes and system integration adaptability to the evolving needs of the technology innovation.  I am confident Farhan would be a valuable asset to any organization seeking an individual who can deliver results, inspire their team, and uphold the highest standards of product and process quality.",
    stamp: "09/30/23, 05:01 PM",
    id: "VISIBLE"
  },
  {
    author: "Asif",
    handle: "Ahmad",
    avatar: "LHE Consulting Inc.",
    Title: "Founder",
    message: "Farhan is knowledgeable, intelligent, committed and skilled as well as a great team player and a good leader. I am sure he'll be a great asset wherever he goes. Wish him all the best in personal and professional life.",
    stamp: "06/30/15, 06:33 PM",
    id: "VISIBLE"
  },
  {
    author: "Adeel",
    handle: "Akhtar",
    avatar: "Sadara Chemical Company",
    Title: "Sr. Process Automation Engineer",
    message: "Muhammad is all about commitment. I always found him up for the challenges. He is very social, friendly and full of life. With his dedication, keen eye on quality and in depth technical knowledge, he has the potential to step up the corporate ladder very quickly. I wish him all the best.",
    stamp: "05/16/15, 06:36 AM",
    id: "VISIBLE"
  },
  {
    author: "Muhmmad Qamar",
    handle: "Hayat",
    avatar: "ShopDev",
    Title: "Delivery Director",
    message: "Mr. Farhan was one of the best team members at SENSYS. He is very dedicated, honest and hard working. He always delivered his comprehensive and quality work on time. He works well under pressure and handle every situation very tectfully.    He is a vital member of the QA team performing Quality Assurance and Testing of the IntelliMax Product. He also has excellent knowledge competitor products.    He is one of the bright Quality Control Engineers in company having detailed eye on all quality aspects of on going projects/products. I wish him best of luck for his bright future.",
    stamp: "07/28/11, 05:07 AM",
    id: "VISIBLE"
  }
].map(entry => ({
  ...entry,
  // avatar: `https://cdn.quasar.dev/img/tweets/${ entry.avatar }`,
  avatar: `${ entry.avatar }`,
  link: `https://twitter.com/${ entry.handle }/status/${ entry.id }`
}))
</script>

<style lang="sass">
.twitter-cards
  margin-left: -24px
  margin-right: -24px

  &__content
    overflow: hidden

  &__entry
    border-radius: 14px
    box-shadow: 0 24px 24px 0 rgba(0,179,255,0.24)
    min-width: 300px
    width: 300px
    max-width: 80vw

  &__stamp
    font-size: .8em

  &__read-btn
    border-radius: 9999px
    border: 1px solid rgb(207, 217, 222) !important
    box-shadow: none !important

  &__arrow
    transition: opacity .5s ease-in-out
    &--left
      background: linear-gradient(to right, $dark-bg 0%, $dark-bg 5%, transparent 100%)
    &--right
      background: linear-gradient(to left, $dark-bg 0%, $dark-bg 5%, transparent 100%)
    &--hidden
      opacity: 0

body.mobile .twitter-cards__content
  overflow: auto
</style>
