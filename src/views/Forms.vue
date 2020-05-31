<template>
  <v-container>
    <v-row v-for="variant in variants" :key="variant">
      <v-col cols="12">
        <h4 class="text-uppercase">{{variant}}</h4>
      </v-col>
      <v-col cols="3">
        <span class="caption">placeholder</span>
        <v-text-field placeholder="Regular" v-bind="getTypes(variant)" />
      </v-col>

      <v-col cols="3">
        <span class="caption">label</span>
        <v-text-field label="Regular" v-bind="getTypes(variant)" />
      </v-col>
      <v-col cols="3">
        <span class="caption">value</span>
        <v-text-field value="Hello" v-bind="getTypes(variant)" />
      </v-col>
      <v-col cols="3">
        <span class="caption">placeholder + value</span>
        <v-text-field
          placeholder="Regular"
          value="Hello"
          v-bind="getTypes(variant)"
        />
      </v-col>
      <v-col cols="3">
        <span class="caption">label + value</span>
        <v-text-field
          label="Regular"
          value="Hello"
          v-bind="getTypes(variant)"
        />
      </v-col>
      <v-col cols="3">
        <span class="caption">label + placeholder</span>
        <v-text-field
          label="Label"
          placeholder="Placeholder"
          v-bind="getTypes(variant)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Forms',
  data() {
    return {
      variants: [
        'regular',
        'solo',
        'outlined',
        'dense',
        'solo dense',
        'outlined dense',
        'regular disabled',
        'solo disabled',
        'outlined disabled',
        'dense disabled',
        'solo dense disabled',
        'outlined dense disabled',
      ],
    };
  },
  methods: {
    getTypes(type) {
      return type.split(' ').reduce((response, type) => {
        response[type] = true;
        return response;
      }, {});
      // { [type.type]: true }
    },
  },
};
</script>

<style scoped></style>
