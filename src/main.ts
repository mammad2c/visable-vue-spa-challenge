import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./app.vue";
import router from "./router";

// styles
import "primevue/resources/primevue.min.css";
import "./style.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.mount("#app");
