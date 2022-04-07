import VueRouter from 'vue-router';
import ProjectView from "@/view/ProjectView";
import TestView from "@/view/TestView";

const routes = [
  {path: '/system', component: ProjectView},
  {path: '/test', component: TestView},
  {path: '/', redirect: '/system'},
]

export default new VueRouter({
  mode: 'history',
  routes
})
