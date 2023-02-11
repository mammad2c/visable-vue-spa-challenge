import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";

// styles
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "./style.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.mount("#app");
