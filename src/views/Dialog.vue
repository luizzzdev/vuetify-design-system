<template>
  <v-container>
    <v-row>
      <v-btn @click="openDialog">Open dialog</v-btn>
    </v-row>

    <v-dialog v-model="showDialog" width="500">
      <v-card>
        <v-card-title>
          Lorem ipsum
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque
          delectus dolore dolorum incidunt laboriosam modi, nam officia quasi
          sunt! Amet dolorum earum eligendi nihil omnis. Animi maxime ullam
          unde!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text>Cancel</v-btn>
          <v-btn color="primary" text>Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    openDialog() {
      this.showDialog = true;
    },
  },
};
</script>

<style scoped></style>
