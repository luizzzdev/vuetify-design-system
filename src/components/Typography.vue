<template>
  <v-container>
    <h1>Hello world - h1</h1>
    <h2>Hello world - h2</h2>
    <h3>Hello world - h3</h3>
    <h4>Hello world - h4</h4>
    <h5>Hello world - h5</h5>
    <p>Hello world - p</p>
    <span>Hello world - span</span>

    <v-row>
      <v-col
        cols="6"
        v-for="classString in styleAndWeightClasses"
        :key="classString"
      >
        <p :class="classString" class="my-0">Hello world - {{ classString }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Typography',
  data() {
    return {
      styleAndWeightClasses: [
        'font-regular',
        'font-weight-light',
        'font-weight-thin',
        'font-weight-regular',
        'font-weight-medium',
        'font-weight-bold',
        'font-weight-black',
        'font-italic',
        'font-italic font-weight-light',
        'font-italic font-weight-medium',
        'font-italic font-weight-bold',
      ],
    };
  },
};
</script>

<style scoped></style>
