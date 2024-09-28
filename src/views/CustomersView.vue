<script setup>
import { onMounted } from "vue";
import axios from "axios";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";

onMounted(() => {
  axios
    .get("http://localhost:4000/customers")
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
});

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-end">
    <RouterLink to="add-customer"> Add Customer </RouterLink>
  </div>
  <Heading>{{ title }}</Heading>
</template>
