import { createRouter, createWebHistory } from 'vue-router'
import CustomersView from '@/views/CustomersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CustomersView,
      props: {
        title: "Customers"
      }
    },
    {
      path: '/add-customer',
      name: 'add-customer',
      component: () => import("../views/NewCustomerView.vue"),
      props: {
        title: "Add Customer"
      }
    },

  ]
})

export default router
