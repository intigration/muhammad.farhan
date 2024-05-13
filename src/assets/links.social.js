import { fabFacebook, fabGithub, fabLinkedin } from '@quasar/extras/fontawesome-v6'
// import { mdiDiscord, mdiForum } from '@quasar/extras/mdi-v6'

export const socialLinks = {
  name: 'Social',
  mq: 1310,
  children: [
    { name: 'Github', icon: fabGithub, path: 'https://github.com/intigration', external: true },
    // { name: 'Discord', icon: mdiDiscord, path: 'https://chat.quasar.dev', external: true },
    // { name: 'Forum', icon: mdiForum, path: 'https://forum.quasar.dev', external: true },
    { name: 'LinkedIn', icon: fabLinkedin, path: 'https://linkedin.com/in/engr-farhan', external: true },
    { name: 'Facebook', icon: fabFacebook, path: 'https://facebook.com/intogration', external: true }
  ]
}
