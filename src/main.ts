import { createApp } from "vue";
import PrimeVue from "primevue/config";
import { VueQueryPlugin } from "vue-query";
import App from "./app.vue";
import { router } from "./router";

// styles
import "./style.css";
import "primevue/resources/primevue.min.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(VueQueryPlugin);

app.mount("#app");
