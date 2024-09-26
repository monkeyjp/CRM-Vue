<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-end">
    <RouterLink to="home"> Back </RouterLink>
  </div>
  <Heading> {{ title }} </Heading>
</template>
