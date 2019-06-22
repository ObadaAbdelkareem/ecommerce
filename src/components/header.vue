<template>
  <div>
    <ul class="list-style c-header">
      <li class="c-logo">
        <img src="../assets/logo_2.png">
      </li>

      <li class="c-login-btn c-header__action" style="text-align: right;">
        <div>
          <md-button class="md-raised md-primary" @click="loginFlag= !loginFlag">Login</md-button>
        </div>
      </li>
      <li class="c-cart-btn c-header__action" style="text-align: left;position:relative;">
        <div class="c-shopping__icon" @click="cartFlag=!cartFlag">
          <md-icon >shopping_cart</md-icon>
        </div>
        <span class="c-cart-items">0</span>
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
  height: 72px;
}

.c-logo {
  flex: 50%;
  text-align: center;
}

.c-logo img {
  width: 142px;
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

.c-login-btn button.md-button.md-raised.md-primary {
    background: white;
    color: #448aff;
    text-transform: capitalize;
    font-size: 14px;
    letter-spacing: 1px;
    box-shadow: none;
    border: 2px solid #448aff;
    border-radius: 6px;
    padding: 4px 12px;
    height: 30px;
    width: auto;
}

.c-cart-btn .md-icon.md-icon-font {
  font-size: 36px !important;
}

</style>
