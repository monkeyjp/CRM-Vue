<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";
import Customer from "@/components/Customer.vue";

const customers = ref([]);

onMounted(() => {
  axios
    .get("http://localhost:4000/customers")
    .then(({ data }) => {
      customers.value = data;
    })
    .catch((error) => console.log(error));
});

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const ifCustomers = computed(() => {
  return customers.value.length > 0;
});
</script>

<template>
  <div class="flex justify-end">
    <RouterLink to="add-customer"> Add Customer </RouterLink>
  </div>
  <Heading>{{ title }}</Heading>
  <div v-if="ifCustomers" class="flow-root mx-auto mt-10 p-5 bg-white shadow">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-gray-600"
              >
                Name
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-gray-600"
              >
                Company
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-gray-600"
              >
                State
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-gray-600"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <Customer
              v-for="customer in customers"
              key="customer.id"
              :customer="customer"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <p v-else class="text-center mt-10">There are no customers</p>
</template>
