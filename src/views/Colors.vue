<template>
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
      <v-color-picker v-model="$vuetify.theme.themes.light.error" mode="hexa" />
    </div>

    <div>
      <h2>Info</h2>
      <v-color-picker v-model="$vuetify.theme.themes.light.info" mode="hexa" />
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
</template>

<script>
export default {
  name: 'Colors',
};
</script>

<style scoped></style>
