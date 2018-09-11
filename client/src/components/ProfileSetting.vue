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
                            <form action="">
                                <div class="input-group mb-3">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                                        <label class="custom-file-label" for="inputGroupFile01">Changer Profile Picture</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-8 ">
                            <div class="bg-lightmb-2">
                                <h4 class="p-2 text-center">{{user.name}}</h4>
                                <form>
                                    <fieldset>
                                        <div class="form-row">
                                            <div class="form-group col-sm-12">
                                                <label for="inputUsername">Username</label>
                                                <input type="inputUsername" class="form-control" id="inputUsername" :value="user.name">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-sm-12">
                                                <label for="inputEmail">Email</label>
                                                <input type="email" class="form-control" id="inputEmail" :value="user.email">
                                            </div>
                                        </div>
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="inputIsSeller">
                                            <label class="form-check-label" for="inputIsSeller">Become A seller</label>
                                        </div>
                                    </fieldset>
                                    <hr>
                                    <fieldset>
                                        <legend class="text-danger">Change Password: </legend>
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
                                    <fieldset>
                                        <legend>Your shipping Address</legend>
                                        <div class="form-group ">
                                            <label for="inputAddress ">Address</label>
                                            <input type="text " class="form-control " id="inputAddress " placeholder="1234 Main St ">
                                        </div>
                                        <div class="form-group ">
                                            <label for="inputAddress2 ">Address 2</label>
                                            <input type="text " class="form-control " id="inputAddress2 " placeholder="Apartment, studio, or floor ">
                                        </div>
                                        <div class="form-row ">
                                            <div class="form-group col-md-6 ">
                                                <label for="inputCity ">Country</label>
                                                <input type="text " class="form-control " id="inputCity ">
                                            </div>
                                            <div class="form-group col-md-6 ">
                                                <label for="inputState ">City</label>
                                                <input type="text " class="form-control " id="inputCity ">

                                            </div>
                                            <div class="form-group col-md-6 ">
                                                <label for="inputState ">State</label>
                                                <input type="text " class="form-control " id="inputCity ">
                                            </div>
                                            <div class="form-group col-md-6 ">
                                                <label for="postalCode ">Postal Code</label>
                                                <input type="text " class="form-control " id="postalCode ">
                                            </div>
                                        </div>
                                    </fieldset>
                                    <button type="submit " class="btn btn-lg btn-block btn btn-outline-warning ">Update</button>
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
import { mapGetters } from 'vuex'
export default {
  name:"ProfileSetting",
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters({
              isUserLoggedIn:'isUserLoggedIn',
              user: "getUser"
                })       
        }
    }
</script>

<style lang="scss" scoped>
    legend{
        font-weight: bold;
        font-size: 1rem;
    }
    .profile{
        display: block;
        margin: 1rem auto;
        width: 98%;
        max-width: 200px;
        max-height: 200px;
    }
</style>

