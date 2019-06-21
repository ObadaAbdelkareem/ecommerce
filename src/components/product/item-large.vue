<template>
  <article class="c-offer" >
    <div class="list-style grid-container--2">
      <div class="img-large" @click="showProductItem">
        <img  :src="product.featuredPhoto">
      </div>
      <div class="item-description__large">
        <div class="item-description__container">
          <div>
            <span>
              <strong>{{product.name}}</strong>
            </span>
          </div>
          <div style="margin-top:2rem;">icons stars</div>

          <div style="margin-top:2rem; margin-right:1rem;">
            <p>{{product.description}}</p>
          </div>

          <div style="margin-top:1rem; margin-right:1rem;">
            <hr>
          </div>

          <div>
            <div class="c-offer-action" style="margin-top:1rem; margin-right:1rem;">
              <div class="c-offer-price">
                <div>{{product.price}} $</div>
              </div>
              <div class="c-offer-button">
                <md-button class="md-raised md-primary" @click="addToCart">Add To Cart</md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
    props:{
        product:Object
    },

    methods:{
      showProductItem(){
        this.$emit("showProductModal",this.product)
      },
      addToCart(){
        this.$emit("addToCart",this.product);
      }
    }
}
</script>

<style scoped>
hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}

.md-button {
  margin-right: 0px;
  margin-left: 0px;
}

.img-large {
  margin-top: 2rem;
}
.img-large:hover {
  cursor: pointer;;
}

.item-description__large {
  margin-top: 2rem;
  font-size: 16px;
  text-align: left;
}

.item-description__container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
}
.md-image{
    height: 0;
}

</style>
