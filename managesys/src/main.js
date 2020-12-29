import { createApp } from 'vue'
import App from "./App";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import axios from 'axios'

import router from "./router";
import store from "./store";

axios.defaults.baseURL = '/api'  //关键代码

createApp(App).use(store).use(router).use(Antd).mount('#app');
