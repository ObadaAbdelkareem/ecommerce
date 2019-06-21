import api from "../../../service/product"
const state = {
  products: [],
  cart:[]
};

// getters
const getters = {
  products: state => {
    return state.products;
  },
  cart: state => {
    return state.cart;
  }
};

// actions

const actions = {

  /**
   * 
   * Fetch products and iniate state with it
   */
  fetchProducts({ commit }) {
    api
      .productList()
      .then(function(response) {
        console.log('in store',response)
        commit("setProducts", response.products);
      })
      .catch(error => {
        console.log("can't fetch products, ", error.response);
      });
  },

  /**
   * add product to cart 
   * push new product selected to cart state 
   * @param {Object} product 
   */
  addProductToCart({ commit },{product}) {

    commit("addProductsToCart", product);

  }
};

// mutations
const mutations = {

    setProducts(state, products) {
    state.products = products;
  },

  addProductsToCart(state, product) {
    let index = state.cart.findIndex(e => e.id == product.id);
    if (index == -1) {
      state.cart.splice(0,0, product);
    }
    console.log('carts',state.cart)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
