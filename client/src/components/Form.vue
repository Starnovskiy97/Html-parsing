<template>
  <div>
    <form class="form-auth" @submit.prevent="">
      <h3 class="form-auth__title">Авторизуйтесь если требуется</h3>
      <div class="wrapper">
        <input 
          class="form-auth__input"
          type="text"
          placeholder="Введите логин"
          v-model="login"
        />
        <input 
          class="form-auth__input"
          type="password"
          placeholder="Введите пароль"
          autocomplete="on"
          v-model="password"
        />
      </div>
    </form>
    <form class="form-link" @submit.prevent="onSubmit">
      <h3 class="form-link__title">Введите адрес</h3>
      <div class="wrapper">
        <input 
          class="form-link__input"
          type="text"
          placeholder="Введите адрес"
          v-model="url"
        />
        <button  
          class="form-link__button"
          type="submit"
        >
          Получить данные
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'form',
  props: {
    url: String,
    login: String,
    password: String
  },
  emits: ['getInfo'],
  setup(prop, context) {
    const url = ref('');
    const login = ref('');
    const password = ref('');

    const onSubmit = () => {
      context.emit('getList', {
        url: url.value,
        login: login.value,
        password: password.value
      });

      url.value = '';
      login.value = '';
      password.value = '';
    };

    return {
      url,
      login,
      password,
      onSubmit
    };
  }
}
</script>

<style scoped>
input {
  height: 25px;
  width: 300px;
  margin: 5px 0;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid teal;
}

button {
  height: 30px;
  margin: 5px 0 20px 0;
  padding: 5px 15px;
  border-radius: 10px;
  border: none;
  background-color: teal;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: rgb(3, 109, 109);
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.form-link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>