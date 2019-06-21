<template>
  <div >
    <md-dialog :md-active.sync="showModal">
    <div style="margin:1rem;">
      <md-field>
        <md-input placeholder="Username" v-model="initial"></md-input>
      </md-field>
    </div>
    <div style="margin:1rem;">
      <md-field>
        <md-input placeholder="Password" v-model="initial"></md-input>
      </md-field>
    </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Login</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
export default {
  props: {
    showModal: Boolean
  }
};
</script>
<style scoped>
.md-field{
    border: 1px solid #e1e1e1;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
}
</style>
