import { App } from 'vue';
import Calendar from './src/index.vue';

export default {
  install (app: App) {
    app.component('w-calendar', Calendar);
  },
};
