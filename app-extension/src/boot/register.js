import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-npm'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
