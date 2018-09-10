<template>
    <header class="bg-main">
        <nav class="navbar navbar-expand-md navbar-dark bg-main">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"><img src="./../../assets/img/logo.png" alt="logo" id="logo" />
                    <span class="font-weight-bold">Animin</span>
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="nav-wrapper">
                        <form class="bg-white form-search">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <select class="input-group-text" name="categories" id="searchFilter">
                                            <option value="all" selected="true"> all</option>
                                            <option value="computers">computers</option>
                                            <option value="electronics">electronics</option>
                                            <option value="books">books</option>
                                        </select>
                                    </span>
                                </div>
                                <input id="searchInput" class="form-control" type="search" placeholder="Search" aria-label="Search">
                                <div class="input-group-append">
                                    <span class="input-group-text bg-warning" id="searchBtn">
                                        <i class="fas fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link " to="#">categories
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="#">Products</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="#">Best seller</router-link>
                            </li>
                        </ul>
                    </div>
                    <hr class="bg-warning">
                    <div class="nav-aside text-right px-4 mr-auto">
                        <ul class="navbar-nav">
                            <li v-if="isUserLoggedIn" class="nav-item dropdown">
                                <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="far fa-user-circle text-light px-1"></i>{{ user.name }}
                                </router-link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <router-link class="dropdown-item" to="/profile">
                                        <i class="fas fa-cog"></i> profile</router-link>
                                    <div class="dropdown-divider"></div>
                                    <router-link class="dropdown-item" to="/logout">
                                        <i class="fas fa-sign-out-alt"></i> logout</router-link>
                                </div>
                            </li>
                            <li v-if="!isUserLoggedIn" class="nav-item dropdown">
                                <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="far fa-user-circle text-light px-1"></i>Acount
                                </router-link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <router-link class="dropdown-item" to="/login">
                                        <i class="fas fa-key"></i> login</router-link>
                                    <div class="dropdown-divider"></div>
                                    <router-link class="dropdown-item" to="/register">
                                        <i class="fas fa-users"></i> register</router-link>
                                </div>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="">
                                    <i class="fas fa-shopping-cart text-light px-1"></i>Cart</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    </header>
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
<style lang="scss" scoped>
@import '~styles/variables';

#searchBtn{
  cursor: pointer;
  border: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
#searchInput{
  margin: 0;
  height: 35px;
  &:focus{
  border-color: $secondary;
}
}
#logo{
  width: 50px;
}
.nav-wrapper{
    min-width: 75%;
    margin: 0 auto;
    padding: 0;
    position: relative;

    .form-search{
    border-radius: 0.2rem;
    height: 35px;
    padding: 0;

    #searchFilter{
      border: none;
      option{
        background: white
     }
    }
    .input-group{
      max-height: 100%;
    }
    
  }
}
.nav-aside{
      padding-top: 35px;
}

</style>