<template>
     <md-dialog
      :md-active.sync="alertFlag"
     class="c-alert-modal" >
    <div style="margin:auto;">
        <span><strong> have to login to see product details</strong></span>
    </div>
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
    watch:{
        showAlert(newVal,oldVal){
            this.alertFlag= newVal
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
