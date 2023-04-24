<template>
    <Header />
    
    <!-- <div >
        <img src="../assets/images/2.PNG" alt="non" style="height:450px;">
    </div> -->
    <div id="demo" class="carousel slide" data-bs-ride="carousel" style="height: 430px;z-index: 2; ">

                    <!-- Indicators/dots -->
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
            
                    <!-- The slideshow/carousel -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/images/1.PNG" alt="non" class="d-block w-100" style="height:450px;">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/images/2.PNG" alt="non" class="d-block w-100" style="height:450px;">
                        </div>    
                        <div class="carousel-item ">
                            <img src="../assets/images/3.jpg" alt="non" class="d-block w-100" style="height:450px;">
                        </div>
                
                    </div>
            
                    <!-- Left and right controls/icons -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
    <Footer />
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
    components: {
        Header,
        Footer
    }
}
</script>