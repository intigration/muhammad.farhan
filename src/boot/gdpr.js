import { Cookies, Notify, openURL } from 'quasar'

if (Cookies.has('gdpr') !== true) {
  const policyUrl = 'https://www.github.com/intigration'

  Notify.create({
    message: 'Hi, This is Farhan'
+ ' Make your consent for cookies used by the website ',
    multiline: true,
    classes: 'doc-gdpr',
    timeout: 0,
    position: 'bottom-right',
    actions: [
      {
        label: 'Accept',
        color: 'yellow',
        handler () {
          Cookies.set('gdpr', true, { expires: 5 * 365 })
        }
      },
      {
        label: 'See Github profile',
        color: 'grey',
        noDismiss: true,
        handler () {
          openURL(policyUrl)
        }
      }
    ]
  })
}
