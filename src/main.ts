import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElePlusIcons from '@element-plus/icons-vue';
// import comUI from './components/index'
import comUI from '../dist/index.es';
import '../dist/style.css';
import { toLine } from './utils';
const app = createApp(App);
for (let i in ElePlusIcons) {
  app.component(`el-icon-${toLine(i)}`, (ElePlusIcons as any)[i]);
}
app
  .use(router)
  .use(ElementPlus)
  .use(comUI);
app.mount('#app');
