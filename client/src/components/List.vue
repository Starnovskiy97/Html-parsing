<template>
  <div class="list">
    <item v-for="item in list" :key="item.title" :item="item" />
  </div>
</template>

<script>
import Item from '@/components/Item.vue';

export default {
  name: 'list',
  components: { Item },
  props: {
    list: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>
.list {
  margin: 20px 0px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>