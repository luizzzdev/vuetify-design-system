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

      <h1>Buttons</h1>
      <buttons />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Buttons from '@/components/Buttons.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Buttons,
  },

  data: () => ({
    //
  }),

  methods: {},
});
</script>
