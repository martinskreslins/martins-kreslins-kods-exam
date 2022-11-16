<script>
import auth from '../auth';
export default {
  data() {
    return {
      auth,
      eml: "",
      pwd: ""
    }
  }
}
</script>
<template>
  <div id="login-view" >
    <form class="login-form">
        <div class="wrapper-logo">
            <img src="@/assets/logo.svg" />
            <div>KRAKEN.FM</div>
        </div>
        <input id="input-email" placeholder="E-mail" v-model="eml" />
        <input id="input-password" type="password" placeholder="Password" v-model="pwd" />
        <button id="btn-submit" @click="auth.authenticate(this.eml, this.pwd);" :disabled="(pwd.length < 6 || eml < 0)">LOGIN</button>
        
    </form>
</div>
</template>