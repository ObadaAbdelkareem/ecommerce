<template>
  <div class="home">
    <home-header :cartFlag="cartFlag"></home-header>
    <section class="c-section__list">
      <ul class="list-style grid-container--2" style="padding:0 1rem 0 1rem">
        <li class="grid-item">
          <item-large
            :product="products[0]"
            @showProductModal="showProductModal"
            @addToCart="addProductToCart"
          ></item-large>
        </li>
        <li class="grid-item__small">
          <ul class="list-style grid-container--2" style="padding-left:0;">
            <li class="grid-item" v-for="product in filteredTwoProducts">
              <item
                :product="product"
                @showProductModal="showProductModal"
                @addToCart="addProductToCart"
              ></item>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="list-style grid-container--4" style="padding:0 1rem 0 1rem">
        <li v-for="product in filteredProducts" class="grid-item">
          <item
            :product="product"
            @showProductModal="showProductModal"
            @addToCart="addProductToCart"
          ></item>
        </li>
        <li class="grid-item">
          <item></item>
        </li>
      </ul>
    </section>
    <alert :showAlert="alertFlag" @hideAlert="hideAlertLogin"></alert>
    <product-modal :showModal="productFlag" :product="productItem" @addToCart="addProductToCart"></product-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import item from "@/components/product";
import itemLarge from "@/components/product/item-large.vue";
import homeHeader from "@/components/header.vue";
import productModal from "@/components/modal/product-view.vue";
import alert from "@/components/modal/alert.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    item,
    itemLarge,
    homeHeader,
    productModal,
    alert
  },
  data() {
    return {
      productFlag: false,
      cartFlag: false,
      productItem: null,
      alertFlag:false
    };
  },
  computed: {
    ...mapGetters(["products", "authintcatedUser"]),

    /**
     * to get filtered Array of products to get second and third element
     */
    filteredTwoProducts() {
      return this.products.slice(1, 3);
    },
    /**
     * to get the rest filtered Array of products after  get first to third  elements
     */
    filteredProducts() {
      return this.products.slice(3);
    }
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },

  methods: {
    showProductModal(product) {
      if (
        this.authintcatedUser != null&&
        (this.authintcatedUser.role === "normal" ||
          this.authintcatedUser.role === "admin")
      ) {
        this.productItem = product;
        this.productFlag = true;
        this.cartFlag = false;
      }else{
        this.alertFlag =true
        this.cartFlag = false;
        debugger
      }
      
    },

    hideAlertLogin(){
      this.alertFlag =false
    },
    addProductToCart(product) {
      if (this.authintcatedUser != null&&(this.authintcatedUser.role === "normal" || this.authintcatedUser.role === "admin")) 
      {
        this.$store.dispatch("addProductToCart", {
        product: product
      });
      this.cartFlag = true;
      this.productFlag = false;
      }else {
        this.alertFlag =true
        this.cartFlag = false;
      }
      
    }
  }
};
</script>
<style scoped>
.c-section__list {
  background-color: white;
  margin: 4rem;
}
</style>
