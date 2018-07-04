import Vue from "vue";
import Router from "vue-router";
import Teacher from "@/components/teacher";
import Student from "@/components/student";
import Charts from "@/components/charts";

Vue.use(Router);

export default new Router({
  routes: [
    { name: "default", path: "", redirect: { name: "teacher" } }, // 默认
    { name: "teacher", path: "/teacher", component: Teacher }, //
    { name: "student", path: "/student", component: Student },
    { name: "charts", path: "/charts", component: Charts }
  ]
});
