const { createApp, ref,computed } = Vue;

createApp({
  setup() {
    const product = ref("Boots");
    const brand = ref ('SE 331');
    const image = computed(()=>{
        return variants.value[selectedVariant.value].image
    })
    const productLink = ref("https://www.camt.cmu.ac.th/index.php/th/");
    const inStock = computed(()=>{
        return variants.value[selectedVariant.value].quantity
    })
    const inventory = ref(3);
    const onSale = ref(true);
    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      { id: 2234, color: "green", image:'./assets/images/socks_green.jpg' ,quantity:50},
      { id: 2235, color: "blue",image :'./assets/images/socks_blue.jpg' ,quantity :0},
    ]);
    const selectedVariant = ref(0);
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
     const updateVariant=(index)=>{
        selectedVariant.value = index
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
      updateStock,
      updateVariant,

    };
  },
}).mount("#app");
