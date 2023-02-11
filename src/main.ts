import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";

// styles
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "./style.css";

const app = createApp(App);

app.use(PrimeVue);

createApp(App).mount("#app");
