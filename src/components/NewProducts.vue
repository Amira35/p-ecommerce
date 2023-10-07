<template>
    <div class="new-products">
        <v-container>
            <v-row>
            <v-col cols="12" md="7" mt="5" class="text-center">
                <v-row>
                <v-col cols="12" v-if="!products.length">
                    <v-row>
                        <v-col cols="4" v-for="num in 3" :key="num">
                            <v-skeleton-loader type="image, article , actions"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <swiper :pagination="{el : '.swiper-pagination' , clickable : true}"
                :modules="modules"
                :slides-per-view="3"
                :space-between="20"
                class="pb-11 swip" 
                :autoplay="{delay : 3000}" 
                :loop="true"
                :breakpoints="breakpoints">
            <swiper-slide v-for="prod in products" :key="prod.id">
                <v-card elevation="0">
                        <img :src="showItem[prod.title] ? showItem[prod.title] : prod.thumbnail" class="w-100" style="height: 100px;">
                        <v-card-text>
                            {{ `(${prod.title}) ${prod.description}`.length <= 18 ? `(${prod.title}) ${prod.description}`
                            : `(${prod.title}) ${prod.description}`.substring(0 , 18) + '...' }}
                        </v-card-text>
                        <v-card-text style="color: red; font-weight: 900; " class="pl-0 pt-0">
                            ${{ prod.price }}
                        </v-card-text>
                        <v-btn-toggle v-model="showItem[prod.title]">
                            <v-btn v-for="(pic , i) in prod.images" :value="pic" :key="i" size="x-small">
                                <img :src="pic" style="width:30px ; height: 30px; border-radius: 50%; border: 1px solid rgba(0, 0, 0, 0.096); padding: 2px;">
                            </v-btn>
                        </v-btn-toggle>
                        <br>
                        <v-btn variant="outline" density="combact" class="py-2 px-7 my-3" style="text-transform: none; border-radius: 30px;border : 1px solid black" @click="$router.push({
                            name :'product-details' , 
                            params : {productId : prod.id}
                        })" >Choose Option</v-btn>
                    </v-card>
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </swiper>
                </v-col>
                <v-col cols="12" md="5" class="new-products__right">
                    <img src="../assets/images/vr-banner.webp">
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import { Swiper , SwiperSlide } from 'vue-awesome-swiper'
import { Pagination , Autoplay } from 'swiper';
export default {
    name :'NewProducts',
    setup(){
        return{
            modules:[Pagination , Autoplay]
        }
    },
    components:{
        Swiper,
        SwiperSlide , 
        // eslint-disable-next-line vue/no-unused-components
        VSkeletonLoader
    } , 
    props:{
        products : {
            type : Array
        }
    },
    data : ()=>{
        return {
            showItem : {} , 
            breakpoints:{
                0 : {
                    slidesPerView : 1
                } , 
                580 : {
                    slidesPerView : 2
                },
                1024 :{
                    slidesPerView : 3
                }
            }
        }
    } , 
}
</script>

<style scoped>
    .new-products{
        margin: 50px 0;
    }
    .swip{
        margin-top:45px;
    }
    .new-products__right img{
        width : 100%
    }
@media (max-width : 959.99px){
    .new-products__right{
        display: flex;
        justify-content: center;
    }
    .new-products__right img{
        width : 70%
    }
}
</style>