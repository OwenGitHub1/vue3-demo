<template>
  <div>{{ counter }}</div>
  <button @click="addcounter()">计数</button>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    const name = ref(1);
    const addcounter = () => {
      counter.value++;
    };
    return {
      counter,
      addcounter,
      name,
    };
  },
};
</script>
