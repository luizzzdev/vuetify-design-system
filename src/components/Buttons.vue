<template>
  <v-container>
    <div v-for="type in types" :key="type.type">
      <v-row justify="space-between" class="my-4">
        <v-btn
          v-for="color in colors"
          :key="color"
          :color="color"
          v-bind="getTypes(type.type)"
        >
          {{ color.toUpperCase() || 'DEFAULT' }}
        </v-btn>
      </v-row>
      <v-row justify="space-between" class="my-4">
        <v-btn
          v-for="color in colors"
          :key="color"
          :color="color"
          disabled
          v-bind="getTypes(type.type)"
        >
          {{ color.toUpperCase() || 'DEFAULT' }}
        </v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Buttons',
  data() {
    return {
      types: [
        {
          type: 'regular',
        },
        {
          type: 'outlined',
        },
        {
          type: 'depressed',
        },
        {
          type: 'rounded',
        },
        {
          type: 'rounded depressed',
        },
        {
          type: 'text',
        },
        {
          type: 'regular loading',
        },
        {
          type: 'outlined loading',
        },
        {
          type: 'depressed loading',
        },
        {
          type: 'rounded loading',
        },
        {
          type: 'rounded depressed loading',
        },
        {
          type: 'text loading',
        },
      ],
      colors: [
        '',
        'primary',
        'secondary',
        'accent',
        'error',
        'info',
        'success',
        'warning',
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
