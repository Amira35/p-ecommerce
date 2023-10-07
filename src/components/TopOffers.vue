<template>
    <div class="offers bg-grey-lighten-4">
        <v-container fluid>
            <v-row>
                <v-col cols="4" class=" pr-md-5 pr-1">
                    <div class="parnet">
                        <img src="../assets/images/playstations.webp" alt="" style="width: 100%;">
                    </div>
                </v-col>
                <v-col cols="4" class="  pr-md-5 pr-1">
                    <div class="parnet">
                        <img src="../assets/images/headset.webp" alt="" style="width: 100%;">
                    </div>
                </v-col>
                <v-col cols="4" class=" pr-md-5 pr-1">
                    <div class="parnet">
                        <img src="../assets/images/chairs.webp" alt="" style="width: 100%;">
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" class="  pr-md-5 pr-1">
                    <div class="parent">
                        <img src="../assets/images/iphones.webp" style="width: 100%;">
                    </div>
                </v-col>
                <v-col cols="6" class="  pr-md-5 pr-1">
                    <div class="parent">
                        <img src="../assets/images/laptops.webp" style="width: 100%;">
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name : 'TopOffers'
}
</script>

<style scoped>
.offers{
    padding-top: 15px;
}
.parent {
    overflow: hidden;
}
.parent img{
    border-radius: 10px;
    transition: 1s;
}
.parent img:hover{
    transform: scale(1.05);
}
</style>