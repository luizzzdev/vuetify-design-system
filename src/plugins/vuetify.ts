import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00778F',
        secondary: '#2778B7',
        accent: '#DEF0F7',
        error: '#FF5252',
        info: '#7FC7E1',
        success: '#21AA91',
        warning: '#FFA43A',
      },
    },
  },
});
