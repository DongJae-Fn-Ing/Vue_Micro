import { createApp } from "vue";
import Router from "../src/routers/router";
import App from "./App.vue";

createApp(App).use(Router).mount("#app");
