<template>
  <div class="landing-page q-px-lg doc-brand">
    <doc-stars />

    <div>
      <div class="column items-center intro-section letter-spacing-300">
        <q-img src="quasar-api/logo.jpg" width="250px" height="255px" />

        <h1 class="letter-spacing-375 landing-my-large text-center text-white text-size-20 primary-line-height">
          I am passionate, curious, and innovative about making technology purposeful and sellable
        </h1>

        <q-btn
          label="Let's Step into Next generation of Automation?"
          class="call-to-action-btn shadow-bottom-small"
          @click="scrollSectionIntoView.whyQuasar"
        />

        <q-btn
          flat
          round
          icon="arrow_downward"
          class="text-white q-mt-md"
          size="lg"
          padding="none"
          @click="scrollSectionIntoView.whyQuasar"
        />

        <div class="intro-section__sponsors-heading q-mt-xl text-weight-bold text-brand-primary text-size-16 text-capitalize">
          Platinum Hybrid techniques & continous workflows
        </div>
        <div class="row justify-center full-width">
          <sponsor-tile
            v-for="({src, name, href}, platinumSponsorIndex) in sponsors.platinum"
            :key="platinumSponsorIndex"
            :src="src"
            :name="name"
            :href="href"
          />
        </div>
        <q-btn
          flat
          padding="0 8px"
          text-color="white-54"
          no-caps
          label="Fully Intgerated Modren Tooling Chain"
          class="btn-underline text-size-16 letter-spacing-300"
          @click="scrollSectionIntoView.sponsors"
        />
      </div>

      <div class="q-my-xl" id="why-quasar-section">
        <h2 class="heading heading--large">Key Automation Features?</h2>

        <div class="q-gutter-lg row justify-center">
          <why-quasar-card
            v-for="({ icon, title, body, btnLabel, btnLink }, whyQuasarCardIndex) in whyQuasar"
            :key="whyQuasarCardIndex"
            :icon="icon"
            :title="title"
            :body="body"
            :btn-label="btnLabel"
            :btn-link="btnLink"
          />
        </div>
      </div>

      <div class="showcase-section">
        <div class="column items-center">
          <q-icon size="xl" name="img:https://cdn.quasar.dev/img/custom-svg-icons/astronaut.svg" />
          <h2 class="heading heading--large q-my-lg">What my colleques think of Me</h2>
          <q class="heading heading--small">
            See recommedations I received from team members.
            <br />
          </q>
        </div>

        <twitter-cards class="q-mt-xl" />
      </div>

      <div class="support-quasar-section q-px-lg row justify-center">
        <div class="support-quasar-section__content">
          <h2
            class="text-uppercase heading--large support-quasar-section__title"
          >If you have any topic to discuss, I would love to collaborate and contribute , please contact!</h2>

          <div class="heading--small">
            Are you looking for a work, or wants to upskill yourself, needs career or technology advice, don't hesitate to contact me.
          </div>

          <q
            class="q-my-md heading--quote primary-line-height landing-my-large"
          ></q>

          <q-btn
            label="Connect me at LinkedIn"
            class="call-to-action-btn shadow-bottom-small"
            href="https://linkedin.com/in/engr-farhan"
            target="_blank"
          />
        </div>
      </div>

      <div class="text-center sponsors-section" id="sponsors-section">
        <q-icon size="xl" name="img:https://cdn.quasar.dev/img/custom-svg-icons/medal.svg" />
        <h2 class="heading heading--large">My Toolings Chain</h2>
        <div class="heading heading--small"></div>
        <div class="q-pt-lg">
          <sponsor-list />
        </div>
      </div>

      <div class="text-center social-channels-call-to-action">
        <q-img
          src="https://cdn.quasar.dev/img/landing-page/planet.png"
          height="600px"
        >
          <div class="bg-transparent absolute-bottom">
            <q-icon size="xl" name="img:https://cdn.quasar.dev/img/custom-svg-icons/satellite.svg" />
            <div class="heading heading--large">Don't miss the news</div>
            <div class="heading heading--small">Follow our social pages to stay up to date</div>
            <div class="landing-mb--large row reverse justify-center q-mt-md q-gutter-md">
              <q-btn
                v-for="(socialLink, linkIndex) in socialLinks.children.slice(1)"
                :key="linkIndex"
                :label="socialLink.name"
                class="call-to-action-btn no-border-radius"
                color="brand-accent"
                outline
                :href="socialLink.path"
                target="__blank"
              />
            </div>
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMeta, scroll } from 'quasar'

import DocStars from 'src/components/DocStars.vue'
import SponsorList from './SponsorList.vue'
import TwitterCards from './TwitterCards.vue'
import WhyQuasarCard from './WhyQuasarCard.vue'
import SponsorTile from '../sponsors-and-backers/SponsorTile.vue'

import { socialLinks } from 'src/assets/links.social.js'
import { sponsors } from 'src/assets/sponsors.js'

useMeta({
  title: 'NextGen Automation Framework',
  titleTemplate: ''
})

const whyQuasar = [
  {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'continous quality improvement reporting',
    body: 'More than 70 Key quality Metrics for all your needs',
    btnLabel: 'Browse Metrics',
    btnLink: '/components'
  },
  {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'continous code quality checks',
    body: 'Sonarqube intgeration for static code analysis',
    btnLabel: 'Explore Pipelines',
    btnLink: '/components'
  },
  {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/source.svg',
    title: 'Resuable Pipeline Components',
    body: 'Bring down the automation discovery and design efforts, reuse components out of the box.',
    btnLabel: 'Discover Integrations',
    btnLink: '/integrations'
  },
  {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/documentation.svg',
    title: 'Ready Documentation',
    body: 'Great documentation with no hassle - Auto-Generate the user manuals- All the details your project deserve to working properly..',
    btnLabel: 'Get Started',
    btnLink: '/start/quick-start'
  },
  {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'Advance Build analytics and Observbility',
    body: 'Visibility of health across all the components.',
    btnLabel: 'Browse Evals',
    btnLink: '/components'
  },  {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'continous quality improvement reporting',
    body: 'More than 70 Key quality Metrics for all your needs',
    btnLabel: 'Browse Metrics',
    btnLink: '/components'
  },{
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'Self healing and health reporting scripts',
    body: 'New generation of self-healing scripts to ensure business continouty',
    btnLabel: 'How Self-healing works?',
    btnLink: '/components'
  }, {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'Ready Templates to support various Deployment Stratgies',
    body: 'More than 70 Key quality Metrics for all your needs',
    btnLabel: 'Browse Metrics',
    btnLink: '/components'
  },   {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'Autonomous Sprint Management',
    body: 'Multiple Workflows to form an autonomous sprint planning, backlog and retrospective management workflow ',
    btnLabel: 'Browse Metrics',
    btnLink: '/components'
  },{
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'Generic Workers & Test Agents',
    body: 'Genric Workers to perform day-to-day tasks e.g. Scraping, monitoring, email',
    btnLabel: 'Browse Agents',
    btnLink: '/components'
  }, {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'Change Control Version',
    body: 'Every source change is being tracked & interlinked',
    btnLabel: 'Explore Risk Board',
    btnLink: '/components'
  },{
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'Intelligent Risk Board',
    body: 'State of art mechanism for risk identification, supression and mitigation',
    btnLabel: 'Explore Risk Board',
    btnLink: '/components'
  },{
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'Modern Change Management',
    body: 'Predictive manner to detect and plan the Change',
    btnLabel: 'Explore Risk Board',
    btnLink: '/components'
  },{
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'OSS Clearance Check',
    body: 'Continous Check for all Open Source Packages status',
    btnLabel: 'Perform OSS',
    btnLink: '/components'
  }, {
    icon: 'img:https://cdn.quasar.dev/img/custom-svg-icons/components.svg',
    title: 'Data Transformers and Linter',
    body: 'Ready to transform your data into your defined schema',
    btnLabel: 'Browse Metrics',
    btnLink: '/components'
  },
]

function goToSection (sectionId) {
  const el = document.getElementById(sectionId)
  el && scroll.setVerticalScrollPosition(window, el.offsetTop, 400)
}

const scrollSectionIntoView = {
  whyQuasar: () => goToSection('why-quasar-section'),
  sponsors: () => goToSection('sponsors-section')
}
</script>

<style lang="sass">
@use 'sass:math'

$support-quasar-background-padding: 35vw

.landing-page

  .btn-underline
    border-bottom: 1px solid rgba($color: white, $alpha: 0.54)

  .social-channels-call-to-action
    // undo margin from q-page
    margin: 0 -24px 0 -24px

  q
    display: block

  .sponsors
    margin-top: 80px
    margin-bottom: 208px

    &__list
      margin-bottom: 208px

  .showcase-section
    margin-top: 258px

  // The pseudo-element expands to the full height and width of the container,
  // the container padding is needed to allow to display the hands without cropping
  .support-quasar-section
    padding-top: 256px
    padding-bottom: $support-quasar-background-padding
    position: relative

    &:before
      background-image: url(https://cdn.quasar.dev/img/landing-page/astronaut-left-hand.png), url(https://cdn.quasar.dev/img/landing-page/astronaut-right-hand.png)
      background-size: 47%, 47%
      background-position: left bottom, calc(100% + 25px) calc(100% - #{math.div($support-quasar-background-padding, 3)})
      background-repeat: no-repeat, no-repeat
      bottom: 0px
      content: ''
      left: -24px
      position: absolute
      right: -24px
      top: 0px

    &__content
      width: 940px
      max-width: 90vw

  .sponsors-section
    margin-top: 200px

    @media screen and (min-width: $breakpoint-md-max)
      height: calc(100vh - $header-height)

  .intro-section
    margin-top: 60px
    margin-bottom: 208px

    @media screen and (min-height: 980px)
      margin-top: 100px

      &__sponsors-heading
        margin-top: 80px !important

  h2
    line-height: 1.5em

  // We need a thickness of 2px but the default is 1px, and there's no
  // prop to modify it from within quasar
  .q-btn--outline:before
    border: 2px solid $brand-accent
    box-shadow: 0 1px 1px 0 rgba(#000, 0.12)
</style>
