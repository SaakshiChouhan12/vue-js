import { createWebHistory, createRouter } from 'vue-router'
import TheHome from './components/TheHome.vue'
// import ToggleBtn from './components/ToggleBtn.vue'
import ComputeProp from './components/ComputeProp'
// import AboutPg from './components/AboutPg'
import BurgerPsd from './components/BurgerPsd'
import LoadPt from './components/LoadPt'
import CalcOp from './components/CalcOp'
import ParentVu from './components/ParentVu';


const routes = [
  {
    path: '/',
    component: TheHome

  },
  {
    path: '/BurgerPsd',
    component:BurgerPsd
  },
  {
    path: '/LoadPt',
    component: LoadPt
  },
  {
    path: '/CalcOp',
    component: CalcOp
  },
  {
    path: '/ComputeProp',
    component: ComputeProp,
    children: [
      // {
      //   path:'Sakshi',
      //   component:AboutPg
      // },
      {
        path:'Sakshi',
        component:ParentVu
      }

    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
