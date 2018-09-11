<template>
    <section id="register" class="container-fluid">
        <div class="container p-md-5">
            <div class="card col-md-5  col-xs-12 mx-auto">
                <div class="card-body">
                    <h3 class="card-title">Sign in
                    </h3>
                    <form @submit.prevent="loginUser">
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
                            <p>
                                <b>Not a member ?</b>
                                <router-link to="/register"> create acount </router-link>

                            </p>
                        </div>

                        <button type="submit" class="btn btn-block btn-warning">Log in your animin Acount</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import Alert from './partials/Alert.vue';
import authService from '@/services/authService'

export default{
    name: "Registration",
    data () {
        return {
            user: {
                email: "",
                password: ""
            }
            
        }
    },
    methods: {
        loginUser(){
            authService.login({
                email: this.user.email,
                password: this.user.password
            }).then((response) => {
                this.$store.dispatch('setUser',response.data.user);
                this.$store.dispatch('setToken',response.data.token);
                this.$router.push('/');
                alert('logged !')
            }).catch((err) => {
                alert(err);
            });

        }        
    }
}
    
</script>
<style  scoped>
label{
    font-weight: bold;
}


</style>

