import { App } from 'vue';
import chooseArea from './chooseArea';
import chooseIcon from './chooseIcon';
import chooseStreet from './chooseStreet';
import cascaderStreet from './cascaderStreet';
import trend from './trend';
import notification from './notification';
import list from './list';
import menus from './menus';
import progress from './progress';
import chooseTime from './chooseTime';
import chooseDate from './chooseDate';
import chooseCity from './chooseCity';
import form from './form';
import modelForm from './modelForm';
import table from './table';
import calendar from './calendar';
import './styles/base.scss';
import './styles/ui.scss';
// 让组件可以通过use的方法使用
const components = [
  chooseArea,
  chooseIcon,
  chooseStreet,
  cascaderStreet,
  trend,
  notification,
  list,
  menus,
  progress,
  chooseTime,
  chooseDate,
  chooseCity,
  form,
  modelForm,
  table,
  calendar,
];
export default {
  install (app: App) {
    components.forEach((item) => {
      app.use(item);
    });
  },
};
