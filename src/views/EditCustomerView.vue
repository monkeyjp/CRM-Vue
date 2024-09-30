<script setup>
import { onMounted, reactive } from "vue";
import { FormKit } from "@formkit/vue";
import { useRouter, useRoute } from "vue-router";
import CustomerService from "@/services/CustomerService";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";

const route = useRoute();
const router = useRouter();

const { id } = route.params;

const formData = reactive({});

onMounted(() => {
  CustomerService.getCustomer(id)
    .then(({ data }) => {
      Object.assign(formData, data);
    })
    .catch((error) => console.log(error));
});

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const handleSubmit = (data) => {};
</script>

<template>
  <div class="flex justify-end">
    <RouterLink to="home"> Back </RouterLink>
  </div>
  <Heading> {{ title }} </Heading>
  <div class="mx-auto mt-10 bg-white shadow">
    <div class="mx-auto md:w-2/3 py-20 px-6">
      <FormKit
        type="form"
        submit-label="Add Customer"
        @submit="handleSubmit"
        :value="formData"
      >
        <FormKit
          type="text"
          label="Customer Name"
          name="name"
          placeholder="Enter customer's name"
          validation="required"
          :validation-messages="{ required: 'Customer name is required' }"
          v-model="formData.name"
        />
        <FormKit
          type="text"
          label="Customer Last Name"
          name="lastName"
          placeholder="Enter customer's last name"
          validation="required"
          :validation-messages="{ required: 'Customer last name is required' }"
          v-model="formData.lastName"
        />
        <FormKit
          type="email"
          label="Customer Email"
          name="email"
          placeholder="Enter customer's email"
          validation="required|email"
          :validation-messages="{ required: 'Customer email is required' }"
          v-model="formData.email"
        />
        <FormKit
          type="text"
          label="Customer Phone"
          name="phone"
          placeholder="Phone: XXX-XXX-XXX"
          validation="required|*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/"
          :validation-messages="{
            required: 'Customer\'s phone number is required',
            matches: 'The phone number format is invalid',
          }"
          v-model="formData.phone"
        />
        <FormKit
          type="text"
          label="Company"
          name="company"
          placeholder="Enter customer's company"
          v-model="formData.company"
        />
        <FormKit
          type="text"
          label="Job Title"
          name="jobTitle"
          placeholder="Enter customer's job title"
          v-model="formData.jobTitle"
        />
      </FormKit>
    </div>
  </div>
</template>
<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
