<template>
    <section id="postProduct" class="container-fluid">
        <div class="container">
            <h2>Post a Product for Sale </h2>
            <hr>
            <form class="card col-md-10 mb-4 py-2" @submit.prevent="postAProduct">
                <div class="form-group">
                    <label for="inputTitle">Title</label>
                    <input type="text" class="form-control" id="inputTitle" required placeholder="Put product title " v-model="product.title" maxlength="32">
                </div>
                <div class="form-group">
                    <label for="inputDescription">Description</label>
                    <textarea type="text" class="form-control" id="inputDescription" placeholder="Product Description here" v-model="product.description" maxlength="128">
                    </textarea>
                </div>
                <div class="form-row">
                    <div class="form-group col-sm-12">
                        <label for="inputCategory">Category</label>
                        <select name="inputCategory" id="inputCategory" class="custom-select my-1 mr-sm-2" v-model="product.category">
                            <option selected>Choose... a categories</option>
                            <option v-for="category in productCategories" :value="category._id" :key="category._id">{{category.name}}</option>

                        </select>
                    </div>
                    <div class="form-group col-sm-12">
                        <button type="button" class="btn btn-link" data-toggle="modal" data-target="#categoryModal" data-whatever="@mdo">Add New Category</button>

                    </div>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Price</span>
                    </div>
                    <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" step="0.001" min="0" v-model="product.price">
                    <div class="input-group-append">
                        <span class="input-group-text">$</span>
                    </div>
                </div>
                <!-- in future
                <div class="form-group my-2">
                    <label for="inputImage">upload a image</label>
                    
                        <input type="file" class="form-control-file" id="inputFile" @change="processFile">
                    
                </div>
                -->
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon2">@product image url : </span>
                    </div>
                    <input type="url" class="form-control" placeholder="procduct image valide url" aria-label="procduct image valide url" aria-describedby="procduct image valide url" v-model="product.image">

                </div>
                <div class="form-group ">

                </div>
                <button type="submit " class="btn btn-success btn-block btn-lg ">Post Your Product</button>
            </form>
        </div>
        <div class="modal fade" id="categoryModal" tabindex="-1" role="dialog" aria-labelledby="categoryModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="categoryModalLabel">New Category</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addNewCategory">
                            <div class="form-group">
                                <label for="category-name" class="col-form-label">name:</label>
                                <input type="text" class="form-control" id="category-name" v-model="newCategory.name">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addNewCategory">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex';
import sellerService from '@/services/sellerService'
export default {
    computed:{
        ...mapGetters({
          productCategories : "getProductsCategories"
        })
    },
    data () {
        return {
            product:{
                title: '',
                description: "",
                category: "",
                price : "",
                image: "" 
            },
            newCategory:{
                name: ""
            }
        }
    },
    methods:{
        postAProduct(){
            sellerService.postProduct({
                title : this.product.title,
                description: this.product.description,
                category: this.product.category,
                price: this.product.price,
                image: this.product.image
            }).then((response) => {
                    this.$store.dispatch('putProduct',response.data.product);
                    alert("success product posted !");
                    this.product = {};     
            }).catch((err) => {
                alert(err);
                console.log(err);          
            });
        },
        /*
        processFile(event) {
             this.product.image = event.target.files[0]
        }
        */
       addNewCategory(){
           sellerService.addProductCategory({
               name : this.newCategory.name
           }).then((reponse) => {
               this.$store.dispatch("putProductCategory",reponse.data.category);
               
               alert("success Category added !");
               this.newCategory = {}     
               this.$router.go("/seller/product")     
           }).catch((err) => {
               alert(err);       
           });
       }
    }
  
}
</script>

<style lang="scss" scoped>
    .btn.btn-link{
        &:hover{
            color: orangered;
        }
    }
</style>
