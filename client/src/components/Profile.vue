<template>
    <section id="profile" class="container-fluid">
        <div class="container">
            <h2>My Profile</h2>
            <hr>
            <div class="row">
                <div class="card col-sm-12">
                    <div class="row">
                        <div class="col-sm-4">
                            <img class="profile mx-auto" :src="user.picture" alt="" srcset="">

                        </div>
                        <div class="col-sm-8 ">
                            <div class="card-header mb-2">
                                <h4>{{user.name}}</h4>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <router-link to="#">My orders</router-link>
                                        <span class="badge badge-primary badge-pill">14</span>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/profile/settings">Change Acount setting
                                        </router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="#">Change Shipping Address</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer">
                                <h4> Seller Action</h4>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <router-link to="/seller/products" class="btn btn-success btn-block" tag="button">My products</router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/seller/product" class="btn btn-block text-white bg-warning" tag="button"> Post Product for sale</router-link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name : "Header",
        data () {
            return {
                
            }
        },
        computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters({
              isUserLoggedIn:'isUserLoggedIn',
              user: "getUser"
                })       
        }
    }
</script>
<style>
    .profile{
        display: block;
        margin: 1rem auto;
        width: 98%;
        max-width: 200px;
        max-height: 200px;
    }
</style>

    