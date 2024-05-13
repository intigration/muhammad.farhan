/* eslint-disable */
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 **/

import { join, basename } from 'node:path'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { renderToString } from 'vue/server-renderer'


import renderTemplate from './render-template.js'
import serverEntry from './server/server-entry.js'

import { create, listen, renderPreloadTag, serveStaticContent } from 'app/src-ssr/server'
import injectMiddlewares from './ssr-middlewares'

const port = process.env.PORT || 3111

const doubleSlashRE = /\/\//g
const publicPath = `/`
const resolveUrlPath = publicPath === '/'
  ? url => url || '/'
  : url => url ? (publicPath + url).replace(doubleSlashRE, '/') : publicPath

const rootFolder = fileURLToPath(new URL('.', import.meta.url))
const publicFolder = join(rootFolder, 'client')

const clientManifest = JSON.parse(
  readFileSync(join(rootFolder, './quasar.manifest.json'),
  'utf-8'
  )
)

function resolvePublicFolder () {
  return join(publicFolder, ...arguments)
}

function renderModulesPreload (modules, opts) {
  let links = ''
  const seen = new Set()

  modules.forEach(id => {
    const files = clientManifest[id]
    if (files === void 0) {
      return
    }

    files.forEach(file => {
      if (seen.has(file) === true) {
        return
      }

      seen.add(file)
      const filename = basename(file)

      if (clientManifest[filename] !== void 0) {
        for (const depFile of clientManifest[filename]) {
          if (seen.has(depFile) === false) {
            links += renderPreloadTag(depFile, opts)
            seen.add(depFile)
          }
        }
      }

      links += renderPreloadTag(file, opts)
    })
  })

  return links
}



async function render (ssrContext) {
  const onRenderedList = []

  Object.assign(ssrContext, {
    _meta: {},
    onRendered: fn => { onRenderedList.push(fn) }
  })

  try {
    const renderFn = await serverEntry(ssrContext)
    const runtimePageContent = await renderToString(renderFn, ssrContext)

    onRenderedList.forEach(fn => { fn() })

    // maintain compatibility with some well-known Vue plugins
    // like @vue/apollo-ssr:
    typeof ssrContext.rendered === 'function' && ssrContext.rendered()

    ssrContext._meta.runtimePageContent = runtimePageContent

    

    // @vitejs/plugin-vue injects code into a component's setup() that registers
    // itself on ctx.modules. After the render, ctx.modules would contain all the
    // components that have been instantiated during this render call.
    ssrContext._meta.endingHeadTags += renderModulesPreload(ssrContext.modules, { ssrContext })

    return renderTemplate(ssrContext)
  }
  catch (err) {
    throw err
  }
}

const serveStatic = (pathToServe, opts = {}) => serveStaticContent(resolvePublicFolder(pathToServe), opts)

const middlewareParams = {
  port,
  resolve: {
    urlPath: resolveUrlPath,
    root () { return join(rootFolder, ...arguments) },
    public: resolvePublicFolder
  },
  publicPath,
  folders: {
    root: rootFolder,
    public: publicFolder
  },
  render: ssrContext => render(ssrContext),
  serve: {
    static: serveStatic
  }
}

const app = create(middlewareParams)

// fill in "app" for next calls
middlewareParams.app = app


// serve the service worker with no cache
app.use(resolveUrlPath('/service-worker.js'), serveStatic('service-worker.js', { maxAge: 0 }))


// serve "client" folder (includes the "public" folder)
app.use(resolveUrlPath('/'), serveStatic('.'))

const isReady = () => injectMiddlewares(middlewareParams)

const ssrHandler = (req, res, next) => {
  return isReady().then(() => app(req, res, next))
}

export default listen({
  isReady,
  ssrHandler,
  ...middlewareParams
})
