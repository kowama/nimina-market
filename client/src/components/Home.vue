<template>
    <section id="home" class="container-fluid">
        <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
                <li data-target="#carouselIndicators" data-slide-to="3"></li>
                <li data-target="#carouselIndicators" data-slide-to="4"></li>
                <li data-target="#carouselIndicators" data-slide-to="5"></li>

            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./../assets/img/image1.jpg" alt="1rst slide">
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100" src="./../assets/img/image2.jpg" alt="2nd slide">
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100" src="./../assets/img/image3.jpg" alt="3rd slide">
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100" src="./../assets/img/image4.jpg" alt="4th slide">
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100" src="./../assets/img/image5.jpg" alt="5th slide">
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100" src="./../assets/img/image6.jpg" alt="6th slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

        </div>
    </section>

</template>

<script>
export default{
    name: "Home",
    data () {
        return {
            
        }
    },
    methods: {
        emitEvent(){
            this.$emit("newAlert", {
                t: "danger",
                msg: "work hard, it will pay one day !"
            })
        }
    }
}
    
</script>
<style lang="scss" scoped>
@import '~styles/variables';


</style>

