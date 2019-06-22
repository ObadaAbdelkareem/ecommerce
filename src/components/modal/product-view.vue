<template>
  <div class="test">
    <md-dialog :md-active.sync="showModal" class="c-prod-modal">
      <div class="c-content__modal">
        <div class="c-image__container">
          <div style="height:100%; display:flex;">
            <div class="c-iamge__view">
              <img :src="selectedPhoto">
            </div>
            <div class="c-list-image__conatiner">
              <ul class="list-style c-vertical-image__list">
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
          <div class="c-content__item_space">
            <span>
              <strong>{{product.name}}</strong>
            </span>
          </div>
          <div class="c-item_row">
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
  height: 432px;
  width: 100%;
  overflow: auto;
}

.c-image__container {
  flex: 50%;
}

.c-image__small {
  max-width: 100%;
  border: 1px solid #e1e1e1;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
}
.c-image__small:hover {
  cursor: pointer;
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

.c-image__large {
  flex: 75%;
}

.c-image__list {
  flex: 25%;
}

.c-prod-modal {
  max-height: 100% !important;
  min-width: 894px;
  padding: 25px 15px 15px;
}

.c-prod-modal .c-content__item {
  flex: 1 1 40%;
  max-width: 40%;
}

.c-prod-modal .c-list-image__conatiner {
  flex: 1 1 88px;
  max-width: 88px;
  margin-right: 15px;
  margin-left: 25px;
}

.c-prod-modal .c-list-image__conatiner ul {
  padding: 0;
  margin: 0;
}

.c-prod-modal .c-list-image__conatiner li {
  margin-bottom: 16px;
}
.c-prod-modal .c-list-image__conatiner li img {
    min-height: 82px;
}

.c-prod-modal .c-iamge__view {
    flex: 1 1 auto;
    max-width: calc(100% - 128px);
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
