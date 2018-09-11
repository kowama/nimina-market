<template>
    <section id="register" class="container-fluid">
        <div class="container p-md-5">
            <div class="card col-md-5  col-xs-12 mx-auto">
                <div class="card-body">
                    <h3 class="card-title">Create account
                    </h3>
                    <form @submit.prevent="registerNewUser">
                        <div class="form-group">
                            <label for="InputName">Your name
                            </label>
                            <input type="text" class="form-control" id="InputName" placeholder="Enter Name" v-model="user.name">
                        </div>
                        <div class="form-group">
                            <label for="InputEmail">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
                        </div>
                        <div class="form-group">
                            <label for="InputPassword1">Password</label>
                            <input type="password" class="form-control" id="InputPassword1" placeholder="Password" v-model="user.password">
                            <small id="emailHelp" class="form-text text-muted">Passwords must be at least 6 characters. .
                            </small>

                        </div>
                        <div class="form-group">
                            <label for="InputPasswordConfirm">Re-enter password
                            </label>
                            <input type="password" class="form-control" id="InputPasswordConfirm" placeholder="Confirm your password" v-model="user.passwordConfirm">
                        </div>

                        <button type="submit" class="btn btn-block btn-warning">Create your animin Acount</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import Alert from '@/components/partials/Alert.vue';
import authService from '@/services/authService'
export default{
    name: "Registration",
    data () {
        return {
            user: {
                name : "",
                email: "",
                password: "",
                passwordConfirm: "",

            }        
        }
    },
    methods: {
         registerNewUser(){
            authService.register({
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                passwordConfirm: this.user.passwordConfirm
                 }).then((response) => {
                     this.$store.dispatch('setUser',response.data.user);
                     this.$store.dispatch('setToken',response.data.token);
                    this.$router.push('/');
                     alert("registred")
                 }).catch((err) => {
                     console.log(err);
                 });
        }
    }
}
</script>
<style lang="scss" scoped>
label{
    font-weight: bold;
}
</style>

