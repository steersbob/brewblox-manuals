<script>
import routes from 'router/routes';

export default {
  name: 'IndexPage',
  data: () => ({
    routes,
  }),
};
</script>

<template>
  <div>
    Index
    <div v-for="route in routes" :key="route.path">
      <router-link :to="route.path">
        {{ route.name }}
      </router-link>
    </div>
  </div>
</template>
