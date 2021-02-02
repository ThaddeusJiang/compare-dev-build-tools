import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from "./App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Calculator from "./pages/Calculator.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/calculator", component: Calculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
