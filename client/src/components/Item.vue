<template>
  <div class="list__item item">
    <div class="item__title">
      {{ item.title }}
    </div>
    <div class="item__info">
      <span class="item__likes">Лайков: {{ item.likes }}</span>
      <span class="item__views">Просмотров: {{ item.views }}</span>
      <span class="item__created">Дата создания: {{ item.createdDate }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.list__item {
  width: 100%;
  min-height: 50px;
  border: 1px solid teal;
  background-color: rgb(234, 240, 245);
  padding: 10px;
  margin: 10px 0;
}

.item__info {
  margin-top: 10px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  width: 60%;
}

.item__info > span {
  margin-right: 50px;
}
</style>