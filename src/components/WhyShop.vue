<template>
    <div class="why-shop">
        <div class="parent text-center">
            <div class="parent__head">
                <h2 class="text-white"><span>Why Shop</span> With Us?</h2>
            </div>
            <v-container>
                <v-row class="pt-5">
                    <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
                        <img src="../assets/images/free-shipping.png">
                        <p class="text-white font-weight-bold">Free Shippin On first Order</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
                        <img src="../assets/images/weekly-flash-sales.png">
                        <p class="text-white font-weight-bold">Weekly Flash Sales</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
                        <img src="../assets/images/discount.png">
                        <p class="text-white font-weight-bold">Anual Payment Discount</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
                        <img src="../assets/images/cash-back.png">
                        <p class="text-white font-weight-bold">Cashback Reward Program</p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name :'WhyShop'
}
</script>


<style scoped>
.why-shop{
    background-image: url(../assets/images/why-shop-with-us-banner.webp);
    background-size: cover;
    margin-bottom: 20px;
}
.parent{
    padding-top: 40px;
}
.parent .parent__head span{
    color: rgb(45 , 251 , 221);
}
.parent .parent__head{
    font-weight: 900;
    font-size: 20px;
}
</style>