<template>
  <v-app>
    <v-container>
      <v-row justify="space-between">
        <div>
          <h2>Primary</h2>
          <v-color-picker
            v-model="$vuetify.theme.themes.light.primary"
            mode="hexa"
          />
        </div>

        <div>
          <h2>Secondary</h2>
          <v-color-picker
            v-model="$vuetify.theme.themes.light.secondary"
            mode="hexa"
          />
        </div>
        <div>
          <h2>Accent</h2>
          <v-color-picker
            v-model="$vuetify.theme.themes.light.accent"
            mode="hexa"
          />
        </div>

        <div>
          <h2>Error</h2>
          <v-color-picker
            v-model="$vuetify.theme.themes.light.error"
            mode="hexa"
          />
        </div>

        <div>
          <h2>Info</h2>
          <v-color-picker
            v-model="$vuetify.theme.themes.light.info"
            mode="hexa"
          />
        </div>

        <div>
          <h2>Success</h2>
          <v-color-picker
            v-model="$vuetify.theme.themes.light.success"
            mode="hexa"
          />
        </div>

        <div>
          <h2>Warning</h2>
          <v-color-picker
            v-model="$vuetify.theme.themes.light.warning"
            mode="hexa"
          />
        </div>
      </v-row>

      <h1>Typography</h1>
      <typography />

      <h1>Form</h1>
      <forms></forms>

      <h1>Buttons</h1>
      <buttons />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Buttons from '@/components/Buttons.vue';
import Typography from '@/components/Typography.vue';
import Forms from "@/components/Forms.vue";

export default Vue.extend({
  name: 'App',

  components: {
    Forms,
    Typography,
    Buttons,
  },

  data: () => ({
    //
  }),

  methods: {},
});
</script>

<style>
/*@font-face {*/
/*  font-family: Inter;*/
/*  src: url('assets/Inter-Black.otf') format('opentype');*/
/*}*/

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');
</style>

<style lang="sass">
</style>
