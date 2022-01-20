import Vue from 'vue';
import {
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  Popover,
  Empty,
  Loading,
  Message,
} from 'element-ui';

Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Button);
Vue.use(Popover);
Vue.use(Empty);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
