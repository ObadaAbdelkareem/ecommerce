<template>
  <div class="c-cart__container" v-if="showCart">
    <template v-for="item in cart">
      <ul :key="item.id" class="list-style c-cart__item">
        <li class="c-cart__image">
          <img style="width:50%;" :src="item.featuredPhoto">
        </li>
        <li class="c-cart__content">
          <div class="c-cart__description">
            <span>
              <strong>{{item.name}}</strong>
            </span>
            <span>
              <strong>${{item.price}}</strong>
            </span>
          </div>
        </li>
      </ul>

      <hr class="c-cart__line">
    </template>

    <div class="c-cart__action">
        <div class="c-cart_total">
            <span>Total : </span>
        </div>
        <div style="flex:50%">
            ${{getSumOfCarts()}}
        </div>
    </div>
    <div style="text-align:center; margin-bottom:1rem">
        <md-button class="md-raised md-primary" >checkout</md-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    showCart: Boolean
  },
  computed: {
    ...mapGetters(["cart"])
  },
  methods:{
      getSumOfCarts(){
          let sum=0;
          this.cart.forEach(element => {
              sum += +element.price 
          });
          return sum;
          
      }
  }
};
</script>

<style scoped>
.c-cart__container {
  background-color: white;
  position: absolute;
  z-index: 11;
  top: 45px;
  left: -174px;
  display: flex;
  flex-direction: column;
  width: 260px;
  border: 1px solid #e1e1e1;
  box-shadow: 2px 1px 11px 2px rgba(0, 0, 0, 0.05);
}

.c-cart__item {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  margin-top: 1rem;
}

.c-cart__line {
  width: 90%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.c-cart__image {
  text-align: center;
  flex: 50%;
}

.c-cart__content {
  text-align: left;
  flex: 50%;
}

.c-cart__description {
  display: flex;
  flex-direction: column;
}

.c-cart__action{
    display:flex;
    margin-top:1rem;
    
}

.c-cart_total{
    flex:50%;
     text-align:right; 
     margin-right:0.5rem
}
</style>
