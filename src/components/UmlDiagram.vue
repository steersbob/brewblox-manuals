<script>
export default {
  props: {
    url: { type: String, required: true },
    title: { type: String, required: true },
  },
};
</script>

<template>
  <p>
    <img
      :src="url"
      :alt="title"
      :title="title"
    >
  </p>
</template>
