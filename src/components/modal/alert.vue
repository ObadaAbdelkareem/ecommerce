<template>
     <md-dialog
      :md-active.sync="showAlert"
      :md-click-outside-to-close='false'
     class="c-alert-modal" >
    <div style="margin:auto;">
        <span><strong> have to login to see product details</strong></span>
    </div>
     <md-dialog-actions>
        <md-button class="md-primary" @click="hideAlert">Close</md-button>
      </md-dialog-actions>
     </md-dialog>
</template>

<script>
export default {
    data(){
        return{
            alertFlag:false
        }
    },
    props:{
        showAlert:Boolean
    },
    methods:{
        hideAlert(){
            this.$emit("hideAlert")
        }
    },
    watch:{
        showAlert(newVal,oldVal){
            this.alertFlag= newVal
            debugger
        }
    }
}
</script>

<style scoped>
.c-alert-modal.md-dialog {
  width: 200px;
  height: 220px;
}
</style>
