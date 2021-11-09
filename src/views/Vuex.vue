<template>
  <div>
    <p>{{ count }}</p>
    <p>
      Is even : {{evenNumber}}
    </p>
    <p></p>
    <p>
      sync: 
      <button @click="increment">+</button>
      --
      <button @click="decrement">-</button>
    </p>
    <p>
      async:
      <button @click="increment2">+</button>
--
      <button @click="decrement2">-</button>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: "99",
    };
  },
  methods: {
    // 同步
    increment() {
      this.$store.commit("increment", 1);
    },
    decrement() {
      this.$store.commit("decrement", 1);
    },
    // 异步
    increment2() {
      this.$store.dispatch("incrementAsync", 1);
    },
    decrement2() {
      this.$store.dispatch("decrementAsync", 1);
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    evenNumber() {
      return this.$store.getters.evenNumber;
    },
  },
};
</script>