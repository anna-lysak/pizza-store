<template>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <h2 class="text-center">BASKET</h2>
            <table class="table">
                <thead class="thead-dark">
                <tr class="">
                    <th width="30%">Quantity</th>
                    <th width="50%">Item</th>
                    <th width="20%">Total</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in basket" :key="item">
                    <td>
                        <button class="btn btn-sm btn-light" type="button" @click="basketDecrease(item)">-</button>
                        {{item.quantity}}
                        <button class="btn btn-sm btn-light" type="button" @click="basketIncrease(item)">+</button>
                    </td>
                    <td>{{item.name}} {{item.size}}''</td>
                    <td>{{item.price | currency }}</td>
                </tr>
                <tr v-show="basket.length == 0">
                    <td width="100%"><p>{{basketEmptyText}}</p></td>
                </tr>
                </tbody>
            </table>
            <p v-show="basket.length>0">Order Total: <strong>{{ total | currency }}</strong></p>
            <button class="btn btn-success btn-block" v-show="basket.length>0" @click="addNewOrder()">Place Order</button>
        </div>

        <div class="col-sm-12 col-md-6">
            <h2 class="text-center">CONTACT INFO</h2>


        </div>

    </div>


</template>

<script>
    import { mapGetters } from 'vuex';
    import { dbOrdersRef } from "../firebaseConfig.js";

    export default {
        name: "Menu.vue",
        data() {
            return {
                basket: [],
                basketEmptyText: 'Your basket is empty.',
                //total: 0,
            }
        },
        computed: {
            ...mapGetters([
                'getMenuItems'
            ]),
            total() {
                var totalCost = 0
                for (var item in this.basket) {
                    //var individual = this.basket[items]
                    totalCost += this.basket[item].price * this.basket[item].quantity
                }
                return totalCost
            }
        },
        methods: {
            addToBasket(item, option) {
                let product = this.basket.find(c => c.name === item.name && c.size === option.size)
                if (product) {
                    product.quantity++
                } else {
                    this.basket.push({
                        name: item.name,
                        price: option.price,
                        size: option.size,
                        quantity: 1,
                    })
                }
            },
            removeFromBasket(item) {
                this.basket.splice(this.basket.indexOf(item), 1)
            },
            basketDecrease(item) {
                item.quantity--
                if (item.quantity == 0) {
                    this.removeFromBasket(item)
                }
            },
            basketIncrease(item) {
                item.quantity++
            },
            addNewOrder() {
                dbOrdersRef.push(this.basket)
                this.basket = []
                this.basketEmptyText = 'Thank you, your order has been placed!'
            }
        },
    }
</script>

<style scoped>

</style>
