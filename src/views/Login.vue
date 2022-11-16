<script>
import { auth } from '../../auth';
export default {
  data() {
    return {
      auth,
      eml: "",
      pwd: ""
    }
  },
  methods:{
    canEnable(eml, pwd){
      return eml.length > 0 && pwd.length >= 6;
    },
    login(){
      email = this.eml;
      passwd = this.pwd;
      auth.authenticate(email, passwd);
    }

  }
}
</script>
<template>
  <div id="login-view">
    <form class="login-form">
        <div class="wrapper-logo">
            <img src="@/assets/logo.svg" />
            <div>KRAKEN.FM</div>
        </div>
        <input id="input-email" placeholder="E-mail" v-model="eml" />
        <input id="input-password" type="password" placeholder="Password" v-model="pwd" />
        <button id="btn-submit" @click="login" type="submit" :disabled="canEnable(eml, pwd) == 0">LOGIN</button>
        
    </form>
</div>
</template>