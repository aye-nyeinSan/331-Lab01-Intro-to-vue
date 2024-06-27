const { createApp, ref , computed } = Vue;
import productDisplay from './components/ProductDisplay.js';

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
app.mount('#app')