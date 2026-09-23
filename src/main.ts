import { ViteSSG } from 'vite-ssg'
import { ConfigProvider, Drawer } from 'ant-design-vue'
import App from './App.vue'
import { routes } from './router'
import 'ant-design-vue/dist/reset.css'
import 'remixicon/fonts/remixicon.css'
import './assets/styles/global.css'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
	app.use(ConfigProvider)
	app.use(Drawer)
})
