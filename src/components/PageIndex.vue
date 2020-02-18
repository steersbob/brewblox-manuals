<script>
import pages from '../pages/__menu';

export default {
  name: 'PageIndex',
  data: () => ({
    pages,
  }),
};
</script>

<template>
  <div>
    Index
    <div v-for="page in pages" :key="page.path">
      <router-link :to="page.path">
        {{ page.path }}
      </router-link>
    </div>
  </div>
</template>
