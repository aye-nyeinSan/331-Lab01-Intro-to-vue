const { ref, computed } = Vue;

const productDisplay = {
  template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
          <div class="product-image" >
            <!-- 7.6 -->
            <img :src="image" :class="{'out-of-stock-img': !inStock} " />
          </div>
        </div>
      </div>
      <div class="product-info">
        <h1>{{ title}}</h1>
        <!-- 3.6  -->
        <a :href="productLink">product Link</a>

        <p v-if="inventory > 10">In stock</p>

        <p v-else-if="inventory <=10 && inventory > 0">Almost out of Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping : {{shipping}}</p>
        <!-- 4.9  + 8.5 -->
        <p v-if="onSale">{{salepost}}</p>
        <!-- 9.10 -->
        <product-details :details="details"></product-details>
        <!-- 8.4 -->
        <div
          v-for="(variant,index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{backgroundColor:variant.color}"
        >
          {{variant.color}}
        </div>
           <!-- 5.5 -->
        <ul style="display: flex">
          <span>Sizes: </span>
          <li v-for="size in  sizes">{{ size }},</li>
        </ul>
        <button class="button" :disabled="!inStock" :class="{disabledButton: !inStock}" @click="addToCart">Add To Cart</button>
        <button class="button" :disabled="!inStock" :class="{disabledButton: !inStock}" @click="removeFromCart">Remove From Cart</button>

      </div>
       <!-- 6.7 -->
      <button class="button" @click="updateStock">Buy</button>
      <review-list  v-if="reviews.length" :reviews="reviews" ></review-list>
      <review-form @review-submitted="addReview"></review-form>
   
    `,
  props: {
    premium: Boolean,
  },

  setup(props,{emit}) {
    const reviews = ref([]);
    const addReview = (review) => {
      reviews.value.push(review);
    };

    const shipping = computed(() => {
      if (props.premium) {
        return "Free";
      } else {
        return 30;
      }
    });
    const product = ref("Boots");
    const brand = ref("SE 331");
    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });
    const productLink = ref("https://www.camt.cmu.ac.th/index.php/th/");
    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity;
    });
    const inventory = ref(3);
    const onSale = ref(true);

    const details = ref(["50% cotton", "30% wool", "20% polyester"]);
    const variants = ref([
      {
        id: 2234,
        color: "green",
        image: "./assets/images/socks_green.jpg",
        quantity: 50,
      },
      {
        id: 2235,
        color: "blue",
        image: "./assets/images/socks_blue.jpg",
        quantity: 0,
      },
    ]);
    const selectedVariant = ref(0);
    const sizes = ref(["S", "M", "L"]);
    const title = computed(() => {
      return brand.value + " " + product.value;
    });

    const salepost = computed(() => {
      return brand.value + " " + product.value + " " + "is on sale";
    });
    const cart = ref(0);
    const addToCart = () => {
     emit('add-to-cart',variants.value[selectedVariant.value].id)
    };
    const removeFromCart = () => {
      emit('remove-from-cart',variants.value[selectedVariant.value].id)
     };
    
    const updateImage = (variantImage) => {
      image.value = variantImage;
    };
    const updateStock = () => {
      inventory.value -= 1;
      if (inventory.value == 0) {
        inStock.value = false;
      }
    };
    const updateVariant = (index) => {
      selectedVariant.value = index; 
    };

    return {
      title,
      salepost,
      brand,
      product,
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
      shipping,
      addReview,
      reviews,
      removeFromCart
    };
  },
};
