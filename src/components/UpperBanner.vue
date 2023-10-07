<template>
    <div class="banner">
        <img src="../assets/images/banner-bg.jpg">
        <div class="content">
            <V-container>
                <v-row style="overflow-x: hidden;">
                    <v-col cols="5">
                        <h3><span>Huge Saving</span> On UHD Televesions</h3>
                        <p class="content-text">
                            Sale up to 70% off on selected items 
                        </p>
                        <v-btn style="border-radius: 30px; text-transform: capitalize;" 
                        variant='outlined'
                        density="combact"
                        class="py-3 px-6 mt-2"
                        >Shop Now</v-btn>
                    </v-col>
                </v-row>
            </V-container>
        </div>
    </div>
</template>
<script>
export default {
    name : 'UpperBanner'
}
</script>


<style scoped>
    .banner{
        height: 350px;
        position: relative;
    }
    .banner img{
        width : 100% ; 
        height: 100%;
        object-fit: cover;
    }
    .content{
        position: absolute;
        left: 120px;
        top: 10px;
        color: white;
        width: 100%;
    }
    .content h3{
        font-size: 40px;
        font-weight: 900;
    }
    .content h3 span {
        color : rgb(10, 169, 147)
    }
    .content .content-text{
        margin: 20px 0;
        color: white;
    }

@media (max-width: 990px){
    .banner{
        height: 300px;
        
    }
    .content{
        top: 20px;
        left : 10% ;
    }
    .content h3{
        font-size: 30px;
        font-weight: 900;
    }
    .content .content-text{
        font-size: 16px;
    }
}
@media (max-width: 729.9px) {
    .banner{
        height: 300px;
        
    }
    .content{
        left : 8% ;
        top: 30px;
    }
    .content h3{
        font-size: 20px;
        font-weight: 900;
    }
    .content .content-text{
        font-size: 13px;
    }
    button{
        padding: 8px 10px !important;
        font-size: 11px;
    }
}
@media (max-width : 508.99px){
    .banner{
        height: 250px;
    }
    .content h3{
        font-size: 15px;
        font-weight: 900;
    }
    .content .content-text{
        font-size: 10px;
        margin: 5px 0;
        padding: 0;
    }
    button{
        padding: 3px 5px !important;
        font-size: 8px;
    }
}
@media (max-width :397.99px){
    .banner{
        height: 200px;
    }
    .content h3{
        font-size: 13px;
    }
    .content .content-text{
        font-size: 8px;
        margin: 7px 0;
        padding: 0;
    }
}
@media(max-width : 352.99px){
    .banner{
        height: 180px;
    }
    .content h3{
        font-size: 10px;
    }
    .content .content-text{
        font-size: 5px;
        margin: 7px 0;
        padding: 0;
    }
}
</style>