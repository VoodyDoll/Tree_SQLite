import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI'
// console.log(components )
const app=createApp(App)

components.forEach((comm)=>{
	app.component(comm.name,comm)
})

app.use(router).mount('#app')

