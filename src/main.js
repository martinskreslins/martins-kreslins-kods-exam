import { createApp } from 'vue'
import './assets/main.scss'
import router from './router'

import App from './App.vue'

// Importējam vēlamās komponentes
import Header from './components/HeaderComponent.vue'
import AudioPlayer from './components/AudioPlayerComponent.vue'
import Navigation from './components/NavigationComponent.vue'
import IconCaretUp from './components/icons/IconCaretUp.vue'
import IconPlay from './components/icons/IconPlay.vue'
import IconHeart from './components/icons/IconHeart.vue'
import IconGrid from './components/icons/IconGrid.vue'
import IconList from './components/icons/IconList.vue'
const app = createApp(App)

// Komponenetes kuras mēs pievienojam šeit būs globāli pieejamas
app
    .component('Header', Header)
    .component('AudioPlayer', AudioPlayer)
    .component('Navigation', Navigation)
    .component('IconCaretUp', IconCaretUp)
    .component('IconPlay', IconPlay)
    .component('IconHeart', IconHeart)
    .component('IconGrid', IconGrid)
    .component('IconList', IconList)

// Šādi aktivizē rūteri
app.use(router)

app.mount('#app')
