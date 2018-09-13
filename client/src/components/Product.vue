<template>
  <ul class="card-columns px-2 bg-success">
    <li class="card" v-for="product in products" :key="product._id">
      <div class="card-body">
        <img src="https://images-eu.ssl-images-amazon.com/images/I/91zTxxATVmL._AC_SY200_.jpg" />
      </div>
      <br>
      <button @click="addProductToCart(product)" class="btn btn-warning">
        Add to cart
      </button>

    </li>
  </ul>
</template>

<script>
import shopService from '@/services/shopService';
import { mapGetters } from 'vuex'
export default {
  computed:{
 ...mapGetters({
              productCategories : "getProductsCategories",
              products : "getProducts"
            }) 
  },
  created () {
    shopService.fetchProducts().then((response) => {
        this.$store.dispatch('setProducts', response.data.products)      
    }).catch((err) => {
      alert(err.message || "unable to fetch products ")
    });
  }
}
</script>

<style lang="scss" scoped>
ul.card-columns{
  list-style: none;
  }
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 
  .card-columns {
     column-count: 1;
  } 
  li.card{
    padding: 0;
    color: aqua;
    text-align: center;
    .card-body{
      margin: 0%;
      padding: 0%;
      color: yellow;
      width: 100%;
      img{
        display: block;
        width: 100%;
      }
    }
  }
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) { 
  .card-columns {
     column-count: 2;
  } 
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) { 
  .card-columns {
     column-count: 3;
  } 
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) { 
  .card-columns {
     column-count: 5;
  } 
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { 
  
  .card-columns {
     column-count: 7;
  } 
}
</style>
