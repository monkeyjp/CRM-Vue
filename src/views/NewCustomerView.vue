<script setup>
import { FormKit } from "@formkit/vue";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
});

const handleSubmit = (data) => {
  console.log("enviando", data);
};
</script>

<template>
  <div class="flex justify-end">
    <RouterLink to="home"> Back </RouterLink>
  </div>
  <Heading> {{ title }} </Heading>
  <div class="mx-auto mt-10 bg-white shadow">
    <div class="mx-auto md:w-2/3 py-20 px-6">
      <FormKit type="form" submit-label="Add Customer" @submit="handleSubmit">
        <FormKit
          type="text"
          label="Customer Name"
          name="name"
          placeholder="Enter customer's name"
          validation="required"
          :validation-messages="{ required: 'Customer name is required' }"
        />
        <FormKit
          type="text"
          label="Customer Last Name"
          name="lastName"
          placeholder="Enter customer's last name"
          validation="required"
          :validation-messages="{ required: 'Customer last name is required' }"
        />
        <FormKit
          type="email"
          label="Customer Email"
          name="email"
          placeholder="Enter customer's email"
          validation="required|email"
          :validation-messages="{ required: 'Customer email is required' }"
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
        />
        <FormKit
          type="text"
          label="Company"
          name="company"
          placeholder="Enter customer's company"
        />
        <FormKit
          type="text"
          label="Job Title"
          name="jobTitle"
          placeholder="Enter customer's job title"
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
