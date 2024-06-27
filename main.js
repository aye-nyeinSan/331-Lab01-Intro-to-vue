const { createApp, ref,computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const brand = ref ('SE 331');
    const image = ref("./assets/images/socks_green.jpg");
    const productLink = ref("https://www.camt.cmu.ac.th/index.php/th/");
    const inStock = ref(true);
    const inventory = ref(3);
    const onSale = ref(true);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      { id: 2234, color: "green", image:'./assets/images/socks_green.jpg' },
      { id: 2235, color: "blue",image :'./assets/images/socks_blue.jpg' },
    ]);
    const sizes = ref(["S","M","L"])
    const title=computed(()=>{
        return brand.value+' '+ product.value
    })
    const cart = ref(0)
    const addToCart=()=>{
        cart.value+=1
    }
     const updateImage =(variantImage)=>{
        image.value = variantImage
     }
     const updateStock=()=>{
        inventory.value -=1
        if(inventory.value == 0){
            inStock.value = false;
        }
     }
    return {
      title,
      image,
      productLink,
      inStock,
      inventory,
      onSale,
      details,
      variants,
      sizes,
      cart,
      addToCart,
      updateImage,
      updateStock
    };
  },
}).mount("#app");
