<template>
  <div class="loader">
    
  </div>
</template>

<script>
export default {
  name: 'loader'
}
</script>

<style scoped>
.loader {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 12px dashed teal;
  animation: rotate .5s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>