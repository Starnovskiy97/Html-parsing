<template>
  <div class="app">

    <loader-component class="loader" v-if="isLoading" />

    <div class="auth" v-else>
      <form-component @getList="getList" />
    </div>

    <template v-if="values && values.length && !isLoading">
      <list-component :list="values" />
    </template>

  </div>
</template>

<script>
import LoaderComponent from '@/components/UI/Loader/index.vue';
import FormComponent from '@/components/Form.vue';
import ListComponent from '@/components/List.vue';
import { ref } from 'vue';

export default {
  name: 'App',
  components: { LoaderComponent, ListComponent, FormComponent },
  setup() {
    const values = ref([]);
    const isLoading = ref(false);

    const getList = async (form) => {
      try {
        isLoading.value = true;
        const res = await fetch(`${process.env.VUE_APP_API_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form)
        }).then(data => data.json());
  
        values.value = [...res.data];
        console.log('response', res);
      } catch (e) {
        console.log('err', e);
      } finally {
        isLoading.value = false;
      }
    };

    return {
      values,
      isLoading,
      getList
    };
  },
}
</script>

<style scoped>
*,
*::before,
*::after {
   padding: 0;
   margin: 0;
   border: 0;
   box-sizing: border-box;
}
a {
   text-decoration: none;
}
ul,
ol,
li {
   list-style: none;
}
img {
   vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
   font-weight: inherit;
   font-size: inherit;
}
html,
body {
  height: 100%;
  line-height: 1;
  font-size: 16px;
  color: #000;
}
.app {
  min-height: 100%;
  min-width: 300px;
  overflow: hidden;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader {
  margin-top: 300px;
}
</style>
