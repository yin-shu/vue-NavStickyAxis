import NavStickyAxis from './vue-navStickyAxis.vue';
import NavStickyAxisSlot from './vue-navStickyAxisSlot.vue';

export default {NavStickyAxis, NavStickyAxisSlot};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('nav-sticky-axis', NavStickyAxis);
  window.Vue.component('nav-sticky-axis-slot', NavStickyAxisSlot);
}
