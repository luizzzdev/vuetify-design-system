<template>
  <v-app>
    <v-container>
      <v-btn
        v-for="route in routes"
        :key="route.to"
        text
        color="primary"
        :to="route.to"
      >
        {{ route.title }}
      </v-btn>

      <router-view />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { routes } from '@/router';

export default Vue.extend({
  name: 'App',

  data: () => ({
    routes: routes.map(r => ({
      to: r.name,
      title: r.name,
    })),
  }),

  methods: {},
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');
</style>

<style lang="sass"></style>
