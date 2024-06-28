const { createApp, ref , computed, toRefs } = Vue;


const app = createApp({
  setup() {
    const cart = ref(0)
   const premium = ref(false) //9.9

    return{
        cart,
        premium
    }
  },
}) 

app.component('product-display',productDisplay)
app.component('review-form',reviewForm)
app.component('review-list',reviewList)
app.mount('#app')