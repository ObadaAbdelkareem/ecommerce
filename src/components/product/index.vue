<template>

  <article class="c-offer" >
    <div class="c-offer__media" @click="showProductItem">
      <img  :src="product.featuredPhoto">
    </div>
    <div class="c-offer-detail">
      <span><strong>{{product.name}}</strong></span>
      <div class="c-offer-rate">
        <span v-for="star in getRateStars" > <md-icon >star</md-icon></span>
        <span v-if="halfStar"><md-icon >star_half</md-icon></span>
      </div>
      <hr>
      <div class="c-offer-action">
        <div class="c-offer-price">
          <div>${{product.price}}</div>
        </div>
        <div class="c-offer-button">
          <md-button class="md-raised md-primary" @click="addToCart">Add To Cart</md-button>
        </div>
      </div>
    </div>
  </article>
  
   <!-- <font-awesome-icon icon="star" /> -->
                  <!-- <font-awesome-icon :icon="['fas', 'star']"/> // solid -->
                  <!-- <font-awesome-icon :icon="['far', 'star']"/> -->
      <!-- <md-icon class="md-size-2x">add</md-icon> -->
      <!-- <md-icon md-src="/assets/icon-add.svg" /> -->
            <!-- <md-button class="md-raised md-primary" >Disabled</md-button>
 <md-button class="md-icon-button">
        <md-icon>home</md-icon>
      </md-button> -->
        
</template>

<script>
export default {
    date(){
      return{
        halfStar:false
      }
    },
    props:{
        product:Object
    },
    computed:{
      getRateStars(){
        if(this.product.rate.includes("."))
         { 
          let starsArray = this.product.rate.split('.')
          let completeStars = starsArray[0];
          this.halfStar= true
          console.log('iddd',this.product.id)
          return parseInt(completeStars)
         }else {
           this.halfStar= false
           return parseInt(this.product.rate)
         }
      }
    },
    methods:{
      showProductItem(){
        this.$emit("showProductModal",this.product)
      },

      addToCart(){
        this.$emit("addToCart",this.product);
      },

      getRateStars(){
        if(this.product.include('.'))
         { 
          let starsArray = this.product.split('.')
          let completeStars = starsArray[0];
          return completeStars
         }
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

.md-button{
  margin-right:0px;
  margin-left: 0px; 
}
.md-image{
    height: 0;
}

.c-offer__media:hover{
  cursor: pointer;
}

.c-offer-rate {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top:1rem;
}
</style>
