<template>
    <section id="ProfileSetting">
        <div class="container">
            <h2>My Account Settings </h2>
            <hr>

            <div class="row">
                <div class="card col-sm-12 bg-light mb-4 py-2">
                    <div class="row">
                        <div class="col-sm-4">
                            <img class="profile mx-auto" :src="user.picture" alt="" srcset="">
                            <form @submit.prevent="updateMyData">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text btn-img" @click="updateMyPicture = !updateMyPicture">@url : </span>
                                    </div>
                                    <input type="url" class="form-control" v-model="toUpdate.picture" aria-label="procduct image valide url" aria-describedby="procduct image valide url" :disabled="!updateMyPicture">
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-8 ">
                            <div class="bg-lightmb-2">
                                <h4 class="p-2 text-center">{{user.name}}</h4>
                                <form @submit.prevent="updateMyData">
                                    <fieldset :disabled="!updateMyInfo">
                                        <legend @click="updateMyInfo = !updateMyInfo">User information</legend>
                                        <div class="form-row">
                                            <div class="form-group col-sm-12">
                                                <label for="inputUsername">Username</label>
                                                <input type="inputUsername" class="form-control" id="inputUsername" v-model="toUpdate.name">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-sm-12">
                                                <label for="inputEmail">Email</label>
                                                <input type="email" class="form-control" id="inputEmail" v-model="toUpdate.email" ref="email">
                                            </div>
                                        </div>
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="inputIsSeller" v-model="toUpdate.isSeller">
                                            <label class="form-check-label" for="inputIsSeller">Become A seller</label>
                                        </div>
                                    </fieldset>
                                    <hr>
                                    <fieldset :disabled="!updatePassword">
                                        <legend class="text-danger" @click="updatePassword = !updatePassword">Change Password: </legend>
                                        <div class="form-row ">
                                            <div class="form-group col-md-6 ">
                                                <label for="inputPassword">New password : </label>
                                                <input type="password" class="form-control " id="inputPassword " placeholder="Your new Password">
                                            </div>
                                            <div class="form-group col-md-6 ">
                                                <label for="inputPasswordConfirm ">New password confirm :</label>
                                                <input type="password" class="form-control " id="inputPasswordConfirm " placeholder="Your new Password Confirm">
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr>
                                    <fieldset :disabled="!updateMyAddress">
                                        <legend class="text-primary" @click="updateMyAddress = !updateMyAddress">Your shipping Address</legend>
                                        <div class="form-group ">
                                            <label for="inputAddress ">Address</label>
                                            <input type="text " class="form-control " id="inputAddress" name="inputAddress" placeholder="1234 Main St " v-model="toUpdate.address.addr1">
                                        </div>
                                        <div class="form-group ">
                                            <label for="inputAddress2 ">Address 2</label>
                                            <input type="text " class="form-control " id="inputAddress2" name="inputAddress2" placeholder="Apartment, studio, or floor" v-model="toUpdate.address.addr2">
                                        </div>
                                        <div class="form-row ">
                                            <div class="form-group col-md-6 ">
                                                <label for="inputCity ">Country</label>
                                                <input type="text " class="form-control " id="inputCountry" name="inputCountry" v-model="toUpdate.address.country">
                                            </div>
                                            <div class="form-group col-md-6 ">
                                                <label for="inputState ">City</label>
                                                <input type="text " class="form-control " id="inputCity" name="inputCity" v-model="toUpdate.address.city">

                                            </div>
                                            <div class="form-group col-md-6 ">
                                                <label for="inputState ">State</label>
                                                <input type="text " class="form-control " id="inputState" name="inputState" v-model="toUpdate.address.state">
                                            </div>
                                            <div class="form-group col-md-6 ">
                                                <label for="inputPostalCode ">Postal Code</label>
                                                <input type="text " class="form-control " id="inputPostalCode" name="inputPostalCode" v-model="toUpdate.address.postalCode">
                                            </div>
                                        </div>
                                    </fieldset>
                                    <button type="submit " class="btn btn-lg btn-block btn btn-outline-warning" :disabled="!updateMyInfo && !updatePassword && !updateMyAddress">Update</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import userService from '@/services/userService';
import { mapGetters } from 'vuex'
export default {
  name:"ProfileSetting",
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters({
              isUserLoggedIn:'isUserLoggedIn',
              user: "getUser"
                })       
        },
        data(){
            return {
                
                toUpdate: {
                    name : "",
                    email: "",
                    picture: "",
                    password: "",
                    passwordConfirm: "",
                    isSeller: "",
                    address: {
                        addr1: "",
                        addr2: "",
                        city: "",
                        state: "",
                        country: "",
                        postalCode: ""
                    },
                },
                updatePassword: false,
                updateMyInfo: false,
                updateMyAddress: false,
                updateMyPicture: false
            }
        },
        methods:{
            updateMyData(){
                const toUpdate = {
                    name: this.toUpdate.name,
                    email: this.toUpdate.email,
                    picture: this.toUpdate.picture,
                    isSeller: this.toUpdate.isSeller,
                    password: this.toUpdate.password,
                    passwordConfirm: this.toUpdate.passwordConfirm,
                    address: this.toUpdate.address,
                    updatePassword: this.updatePassword
                };
               userService.update(toUpdate).then((response) => {
                    this.$store.dispatch('setUser',response.data.updatedUser);
                    alert("user updated !");
                    if(response.data.passwordUpdated){
                        alert("password updated !")
                    }

               }).catch((err) => {
                   alert(err);                   
               });

            }
        },
        mounted() {
            this.toUpdate.name = this.user.name;
            this.toUpdate.email = this.user.email;
            this.toUpdate.picture = this.user.picture;
            this.toUpdate.isSeller = this.user.isSeller;
            this.toUpdate.address = this.user.address;            
        },
    }
</script>

<style lang="scss" scoped>
    legend{
        font-weight: bold;
        font-size: 1rem;
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
    .profile{
        display: block;
        margin: 1rem auto;
        width: 98%;
        max-width: 200px;
        max-height: 200px;
    }
    input{
        text-overflow: ellipsis;
    }
    .custom-file-label{
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .btn-img{
        background: white;
        cursor:pointer;
    }
</style>

