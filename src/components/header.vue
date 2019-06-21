<template>
  <div>
    <ul class="list-style c-header">
      <li class="c-logo">
        <img style="width:20%;margin-top: 1rem;" src="../assets/logo_2.png">
      </li>

      <li class="c-header__action" style="text-align: right;">
        <div>
          <md-button class="md-raised md-primary" @click="loginFlag= !loginFlag">Login</md-button>
        </div>
      </li>
      <li class="c-header__action" style="text-align: left;position:relative;">
        <div class="c-shopping__icon" @click="cartFlag=!cartFlag">
          <md-icon >shopping_cart</md-icon>
          <!-- <md-button class="md-raised md-primary" @click="cartFlag=!cartFlag">cart</md-button> -->
        </div>
        <!-- <div style="background-color: white;position:absolute;z-index: 11;top: 56px;left: -159px; display:block;width: 200px;  border: 1px solid #e1e1e1;box-shadow: 2px 1px 11px 2px rgba(0, 0, 0, 0.05);">
         
          <ul class="list-style" style="display:flex;justify-content: space-between;padding-left:0;align-items: center;margin-top:1rem;">
            <li style="text-align: center;flex: 50%;">
                <img style="width:50%;" src="../assets/logo_2.png">
            </li>
            <li style="text-align: left;flex: 50%;">
                <div style="display:flex;flex-direction: column;">
                    <span><strong>obada</strong></span>
                    <span><strong>obada</strong></span>
                    <span><strong>$40</strong></span>
                </div>
            </li>
          </ul>

          <hr style="width:90%;display:block;margin-right:auto;margin-left:auto;">

           <ul class="list-style" style="display:flex;justify-content: space-between;padding-left:0;align-items: center;margin-top:1rem;">
            <li style="text-align: center;flex: 50%;">
                <img style="width:50%;" src="../assets/logo_2.png">
            </li>
            <li style="text-align: left;flex: 50%;">
                obada
            </li>
          </ul>

          <hr style="width:90%;display:block;margin-right:auto;margin-left:auto;">

        </div>-->
        <cart :showCart="cartFlag"></cart>
      </li>
    </ul>

    <login :showModal="loginFlag"></login>
  </div>
</template>
<script>
import login from "@/components/modal/login";
import cart from "@/components/cart";
export default {
  props: {
    cartFlag: Boolean
  },
  data() {
    return {
      loginFlag: false,
      cartFlag: false
    };
  },
  components: {
    login,
    cart
  }
};
</script>

<style scoped>
.c-header {
  background-color: white;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  border: 1px solid #e1e1e1;
  box-shadow: 2px 1px 11px 2px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
}

.c-logo {
  flex: 50%;
  text-align: center;
}

.c-header__action {
  flex: 50%;
}

.c-shopping__icon{
  margin-left:3rem
}
.c-shopping__icon:hover{
  cursor: pointer;
}
</style>
