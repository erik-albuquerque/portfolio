import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// NProgress config
NProgress.configure({ showSpinner: false })

//Route Events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return null
}
