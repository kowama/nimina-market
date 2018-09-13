<template>
  <div class="container-fluid">
    <ul class="card-flex px-2">
      <li class="card my-2 mx-0" v-for="product in products" :key="product._id">
        <div class="card-body">
          <img src="https://images-eu.ssl-images-amazon.com/images/I/91zTxxATVmL._AC_SY200_.jpg" />
          <br>
          <b>{{product.price | currency}}</b>
          <i class="fas fa-star text-warning" v-for="(star, i) in product.rating" :key="i"></i>
          <br>
          <router-link to="product/details">
            more information
          </router-link>
          <button class="btn btn-warning"> add to cart</button>
        </div>
      </li>
    </ul>
  </div>
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
ul.card-flex {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;

  }
  li.card{
    margin: auto;
    max-width: 200px;
    min-width: 200px;
    .card-body{
      min-width: 100%;
      width: 100%;
      max-width: 100%;
      &:hover{
        background: #ffc8125d;
      }
      
      img{
        display: block;
        width: 100%;
        max-width: 100%;
      }
    }
}
.fas.fa-star{
  font-size: 0.8rem;
}
</style>
