const { createApp, ref, computed, reactive ,toRefs } = Vue;

const app = createApp({
  setup() {
    const cart = ref([]);
    const premium = ref(false); //9.9

    const updateCart = (id) => {
      console.log(cart.value);
      cart.value.push(id)
    };
    const removeFromCart= (id)=>{

      const index = cart.value.indexOf(id)
     if(index > -1 )
      cart.value.splice(index,1)
    }
    return {
      cart,
      premium,
      updateCart,
      removeFromCart,
    };
  },
});

app.component("product-display", productDisplay);
app.component("review-form", reviewForm);
app.component("review-list", reviewList);
app.mount("#app");
