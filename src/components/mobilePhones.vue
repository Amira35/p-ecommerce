<template>
    <div class="mob-phones">
        <div class="mob-phones__title">
            <h2>Top Mobile Phones</h2>
        </div>
        <v-container>
            <v-row>
                <v-col cols="12" v-if="!products.length">
                    <v-row>
                        <v-col cols="3" v-for="num in 4" :key="num">
                            <v-skeleton-loader type="image, article , actions"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <swiper :pagination="{el : '.swiper-pagination' , clickable : true}"
                :modules="modules"
                :slides-per-view="4"
                :space-between="35"
                class="pb-11" 
                :navigation="{prevIcon : '.swiper-prev' , nextIcon : '.swiper-next' }"
                :autoplay="{delay : 3000}" 
                :breakpoints="breakpoints"
                :loop="true">
            <swiper-slide v-for="prod in products" :key="prod.id" class="text-center">
                <v-card elevation="0">
                        <img :src="showItem[prod.title] ? showItem[prod.title] : prod.thumbnail" class="w-100" style="height: 200px;">
                        <v-card-text>
                            {{ `(${prod.title}) ${prod.description}`.length <= 54  ? `(${prod.title}) ${prod.description}` 
                            : `(${prod.title}) ${prod.description}`.substring( 0 , 54) + '...' }}
                        </v-card-text>
                        <v-rating v-model="prod.rating" half-increments color="yellow-darken-2" size="small" density="compact"></v-rating>
                        <v-card-text style="color: red; font-weight: 900; " class="pl-0 pt-0">
                            ${{ prod.price }}
                        </v-card-text>
                        <v-btn-toggle v-model="showItem[prod.title]">
                            <v-btn v-for="(pic , i) in prod.images" :value="pic" :key="i" size="x-small">
                                <img :src="pic" style="width:40px ; height: 40px; border-radius: 50%; border: 1px solid rgba(0, 0, 0, 0.096); padding: 2px;">
                            </v-btn>
                        </v-btn-toggle>
                        <br>
                        <v-btn variant="outline" density="combact" class="py-2 px-7 my-3" style="text-transform: none; border-radius: 30px;border : 1px solid black"
                        @click="$router.push({
                            name :'product-details' , 
                            params : {productId : prod.id}
                        })">Choose Option</v-btn>
                    </v-card>
            </swiper-slide>
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
            <div class="swiper-pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper , SwiperSlide } from 'vue-awesome-swiper'
import { Pagination , Navigation , Autoplay} from 'swiper'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
export default {
    name : 'mobilePhones' , 
    // eslint-disable-next-line no-undef
    props : {
        products:{
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
                500 : {
                    slidesPerView : 2
                },
                767 : {
                    slidesPerView : 3
                } , 
                990 :{
                    slidesPerView : 3
                }, 
                1200 :{
                    slidesPerView : 4
                }
            }
        }
    } , 
    components : {
        Swiper , 
        SwiperSlide , 
        // eslint-disable-next-line vue/no-unused-components
        VSkeletonLoader
    },
    setup() {
        return {
            modules:[Pagination , Navigation , Autoplay]
        }
    }
}
</script>

<style scoped>
.mob-phones{
    padding:50px 20px ;
}
.mob-phones__title h2{
    padding: 30px 0;
}
</style>