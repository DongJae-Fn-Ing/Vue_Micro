import { createApp } from "vue";
import Router from "../src/routers/router";
import store from "./store/store.js";
import App from "./App.vue";
import mitt from "mitt";
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(Router).use(store).mount("#app");
