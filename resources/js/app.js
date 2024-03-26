import './bootstrap';
import { createApp } from 'vue';
import Test from './components/Test.vue';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

const app = createApp({});

app.component('test', Test);
app.mount('#app');
