<template>
  <div>
      <button @click="back">
        Back to the home page
      </button>
  </div>
</template>
<script>
export default {
  methods: {
    back(){
      this.$router.push({
        path:"/",
        query:{
          id:123
        }
      })
    }
  },
}
</script>