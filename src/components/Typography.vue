<template>
  <div>
    <h1>Hello world - h1</h1>
    <h2>Hello world - h2 </h2>
    <h3>Hello world</h3>
    <h5>Hello world</h5>
    <h6>Hello world</h6>
    <p>Hello world</p>

    <p class="font-weight-light">Hello world</p>
    <p class="font-italic">Hello world</p>

    <p
      v-for="classString in styleAndWeightClasses"
      :class="classString"
      :key="classString"
    >
      Hello world - {{ classString }}
    </p>
  </div>
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
