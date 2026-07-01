import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Home from './Home.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  Home,
}
