<template>
  <div >
    <md-dialog :md-active.sync="showModal" class="c-login-modal">
    <div>
      <md-field>
        <md-input placeholder="Username" v-model="username"></md-input>
      </md-field>
    </div>
    <div>
      <md-field :md-toggle-password="false">
        <md-input type="password" placeholder="Password" v-model="password"></md-input>
      </md-field>
    </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="login">Login</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return{
      username:null,
      password:null,
    }
  },
  props: {
    showModal: Boolean
  },

  methods:{
    login(){
      this.$store.dispatch("signIn",{
        username:this.username,
        password:this.password
      })
    }
  }
};
</script>
<style scoped>
.md-field{
  border: 1px solid #e1e1e1;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
}
.c-login-modal.md-dialog {
  width: 400px;
  height: 320px;
}
</style>
