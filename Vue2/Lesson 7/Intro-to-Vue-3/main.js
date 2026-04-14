
const app = Vue.createApp({
    data () {
        return {
            cart: 0,
            product : 'Socks',
            description: 'HOT HOT HOT',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            instock: false,
            onsale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],


        }
    },
    methods: {
        addTocart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
