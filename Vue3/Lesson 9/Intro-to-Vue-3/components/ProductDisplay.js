app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        details: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image"
            :class ="{ 'out-of-stock-img': !instock }" >
          </div>
          <div class="product-info">
            <!--Excercise 8 -->
            <h1> {{ title }}</h1>
            <p> {{ description }}</p>
      <!-- Exercise 4 -->
            <p v-if="inStock"> In Stock</p>
            <p v-else> Out of Stock</p>
            <!-- Exercise 9 -->
            <p>Shipping: {{ shipping }}</p>
            <!-- Challenge 9 -->
        <ul>
                <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
      <!-- Exercise 5 -->
            <ul>
             <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <!-- Exercise 7 -->
            <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }">
          </div>
      <!-- Exercise 6 -->
            <button class="button"
            :class="{ disabledButton: !instock }"
            :disabled="!instock"
            @click="addTocart">Add to Cart</button>
          </div>
        </div>
      </div>`,
      data () {
        return {
            product : 'Socks',
            brand: 'Vue Mastery',
            description: 'Du Le Quoc Anh GCS220011',
            selectedVariant: 0,
            url: 'https://www.google.com',
            onsale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],


        }
    },
    methods: {
        addTocart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        instock() {
            return this.variants[this.selectedVariant].quantity > 0
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})