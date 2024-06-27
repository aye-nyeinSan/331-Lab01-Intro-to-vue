const { createApp, ref , computed } = Vue;
import productDisplay from './components/ProductDisplay.js';

const app = createApp({
  setup() {
    const cart = ref(0)
    return{
        cart
    }
  },
})

app.component('product-display',productDisplay)
app.mount('#app')