<template>
  <div>
    <div v-for="variant in variants" :key="variant">
      <v-text-field value="Hello" />
      <v-text-field placeholder="Regular" v-bind="getTypes(variant)" />
      <v-text-field label="Regular" v-bind="getTypes(variant)" />
      <v-text-field value="Hello" v-bind="getTypes(variant)" />
      <v-text-field
        placeholder="Regular"
        value="Hello"
        v-bind="getTypes(variant)"
      />
      <v-text-field label="Regular" value="Hello" v-bind="getTypes(variant)" />
      <v-text-field
        label="Label"
        placeholder="Placeholder"
        v-bind="getTypes(variant)"
      />
    </div>
  </div>
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
