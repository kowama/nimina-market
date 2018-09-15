<template>
    <section class="container-fluid">
        <h2>My Products </h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Product identity</th>
                    <th scope="col">Product Data</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="product in myProducts(user._id)" :key="product._id">
                    <th scope="row">
                        <h6>{{product._id}}</h6>
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/91zTxxATVmL._AC_SY200_.jpg" />
                        <br>
                    </th>
                    <td colspan="2">
                        <h6>{{product.title}}</h6>
                        <p>
                            {{product.description}}
                        </p>
                    </td>
                    <td colspan="">{{product.category}} {{product.quantity}}
                        <span class="text-success">
                            {{product.price | currency}}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>

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
