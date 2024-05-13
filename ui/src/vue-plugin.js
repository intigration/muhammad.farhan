import Component from './components/Component'

const version = '1.0.0'

function install (app) {
  app.component(Component.name, Component)
}

export {
  version,
  Component,

  install
}
