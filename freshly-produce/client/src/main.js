import { createApp } from 'vue'
import App from './App.vue';
import router from './router'

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('Card', Card);
app.component('Menubar', Menubar);
app.component('Avatar', Avatar);

app.mount('#app');

