<template>
    <section class="container-fluid">
        <div class="container">
            <h2>My Products </h2>
            <hr>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in myProducts(user._id)" :key="product._id">
                        <th scope="row">{{product._id}}</th>
                        <td>{{product.title}}</td>
                        <td> <img src="https://images-eu.ssl-images-amazon.com/images/I/91zTxxATVmL._AC_SY200_.jpg" />
                        </td>
                        <td>{{product.category}}</td>
                        <td>{{product.description}}</td>
                        <td>{{product.quantity}}</td>
                        <td>{{product.price | currency}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
 computed:{
    ...mapGetters({
        myProducts : "getMyProducts",
        user: "getUser",
    }) 
  }
 
}
</script>

<style>

</style>
