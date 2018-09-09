<template>
  <div class="site-wrapper">
    <app-header> </app-header>
    <main id="main">
      <div class="container-fluid my-1">
        <app-alert :message="alertMessage" ref="alert" />
      </div>
      <router-view @newAlert="showAlert">

      </router-view>

    </main>
    <app-footer></app-footer>

  </div>
</template>

<script>
import Header from './components/partials/Header.vue';
import Footer from './components/partials/Footer.vue';
import Alert from './components/partials/Alert.vue';
export default {
  name: 'app',
  data () {
    return {
      alertMessage:{
          t: "info",
          msg: "my alert work fine !"
      }
    }
  },
  methods:{
    showAlert(alert){
      this.alertMessage = {
        t: alert.t,
        msg: alert.msg
      }
      this.$ref.alert.alert();
    }
    
  },
   components :{
        appHeader: Header,
        appFooter: Footer,
        appAlert : Alert,
    }

}
</script>
<style  scoped>
main#main{
  min-height: 50vh;
}
</style>