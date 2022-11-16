<script>
import auth from './auth';
export default {
  data() {
    return {
      auth
    }
  }
}
</script>
<template>
<Header v-if="auth.is_authenticated == true"></Header>
    
    <div id="section-body">
           <Navigation v-if="auth.is_authenticated == true" />
        <router-view class="section-router"></router-view>
    </div>
        <div id="section-player">
            <AudioPlayer v-if="auth.is_authenticated == true" />
        </div>
</template>
