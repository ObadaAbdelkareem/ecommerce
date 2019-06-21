<template>
  <div>
    <md-dialog :md-active.sync="showModal">
      <!-- old style
          <section class="c-section__list c-list__modal">
        <ul class="list-style grid-container--2 " style="padding-left:0">
          <li class="grid-item c-image__view" >
            <div class="c-image__large">
                <img  style="max-width:100%" :src="product.featuredPhoto">
            </div>
            <div class="c-image__list">
                <div class="c-vertical-image__list">
                    <div>
                        <img  style="max-width:50%" :src="product.featuredPhoto">
                    </div>
                     <div>
                        <img  style="max-width:50%" :src="product.featuredPhoto">
                    </div>
                     <div>
                        <img  style="max-width:50%" :src="product.featuredPhoto">
                    </div>
                     <div>
                        <img  style="max-width:50%" :src="product.featuredPhoto">
                    </div>
                </div>
            </div>
          </li>
          <li class="grid-item">
            <div>obada2</div>
          </li>
        </ul>

      </section>-->

      <div class="c-content__modal">
        <!--style="display:flex;height: 431px;width: 774px;overflow:auto;"-->
        <div class="c-image__container">
          <!--style="flex:50%;"-->
          <div style="height:100%; display:flex;">
            <div class="c-iamge__view">
              <!--style="flex:50%"-->
              <img style="height: 50%;" :src="selectedPhoto">
            </div>
            <div class="c-list-image__conatiner">
              <!--style="flex:50%;text-align: right;"-->
              <ul class="list-style c-vertical-image__list">
                <!--style="display:flex; flex-direction:column; justify-content: space-around;"-->
                <li
                  v-for="(image,index) in product.photos"
                  @click="getSelectedPhoto(index)"
                  :key="index"
                >
                  <img class="c-image__small" :src="image">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="c-content__item">
          <!--style="flex:50%;margin:2rem;"-->
          <div class="c-content__item_space">
            <span>
              <strong>{{product.name}}</strong>
            </span>
          </div>
          <div class="c-item_row">
            <!--style="display:flex;margin-top:2rem;justify-content: space-between;align-items: center;"-->
            <div class="c-content__item_space">
              <span>{{product.price}} $</span>
            </div>
            <div>1</div>
            <div>
              <md-button class="md-raised md-primary" @click="addToCart">Add To Cart</md-button>
            </div>
          </div>
          <div class="c-item__icons">
            <div class="c-content__item_space">
              <span>color</span>
            </div>
            <div style="margin-left: 3rem;">1</div>
          </div>
          <div class="c-item__icons">
            <div class="c-content__item_space">
              <span>Select Size</span>
            </div>
            <div style="margin-left: 3rem;">1</div>
          </div>

          <md-tabs md-dynamic-height style="margin-top:2rem">
            <md-tab md-label="Description">
              <p>{{product.description}}</p>
            </md-tab>
            <md-tab md-label="Shipping">
              <p>{{product.description}}</p>
            </md-tab>
            <md-tab md-label="Return">
              <p>{{product.description}}</p>
            </md-tab>
          </md-tabs>
        </div>
      </div>
    </md-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import item from "@/components/product/product-modal-item.vue";
import { debuglog } from "util";

export default {
  data() {
    return {
      selectedPhotoIndex: null
    };
  },
  props: {
    showModal: Boolean,
    product: Object
  },

  components: {
    item
  },
  computed: {
    ...mapGetters(["products"]),

    selectedPhoto() {
      if (!this.selectedPhotoIndex) return this.product.photos[0];
      else return this.product.photos[this.selectedPhotoIndex];
    }
  },

  methods: {
    getSelectedPhoto(index) {
      this.selectedPhotoIndex = index; //this.product.photos[index]
    },

    addToCart() {
      this.$emit("addToCart", this.product);
    }
  }
};
</script>


<style  scoped>
.md-field {
  border: 1px solid #e1e1e1;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
}

.c-content__modal {
  display: flex;
  height: 431px;
  width: 774px;
  overflow: auto;
}

.c-image__container {
  flex: 50%;
}

.c-iamge__view {
  flex: 50%;
}

.c-list-image__conatiner {
  flex: 50%;
  text-align: right;
}

.c-image__small {
  max-width: 100%;
  border: 1px solid #e1e1e1;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
}
.c-image__small:hover {
  cursor: pointer;
}

.c-content__item {
  flex: 50%;
  margin: 2rem;
}

.c-content__item_space {
  padding-left: 1rem;
}
.c-list__modal {
  padding-left: 0;
  margin: 4rem;
}

.c-vertical-image__list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.c-item_row {
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
}
.c-item__icons {
  display: flex;
  margin-top: 1rem;
  align-items: center;
}
/* .c-image__view {
  display: flex;
} */

.c-image__large {
  flex: 75%;
}

.c-image__list {
  flex: 25%;
}

.md-dialog {
  max-height: 100% !important;
}
</style>
