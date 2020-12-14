import { createApp } from 'vue'
// import App from './App.vue'
// import App from './pages/setup.vue'
// import App from './pages/setup-torefs.vue'
// import App from './pages/todolist.vue'
// import App from './pages/todolist-ref.vue'
// import App from './pages/ref.vue'
// import App from './pages/count.vue'
// import App from './pages/contribution.vue'
import App from './pages/computed.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
