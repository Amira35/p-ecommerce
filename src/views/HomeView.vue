<template>
  <div class="home" >
      <UpperBannerVue/>
      <TheFeaturedVue/>
      <TopOffers/>
      <ProductsSwipper :products="flashDeals" />
      <TopCategoresVue :category="categories"/>
      <NewProductsVue :products="LaptopProducts"/>
      <QualityFeatures/>
      <mobilePhones :products="mobPhones" />
      <BandImg />
      <TopFragrances :products="topFragrances" />
      <v-container>
        <v-row>
          <v-col cols="12">
            <img src="../assets/images/tv-banner.webp" style="width: 100%;">
          </v-col>
        </v-row>
      </v-container>
      <GroceriesSection :products="topGroceries"/>
      <WhyShop/>
  </div>
</template>

<script>
import UpperBannerVue from '@/components/UpperBanner.vue'
import TheFeaturedVue from '@/components/TheFeatured.vue'
import TopOffers from '@/components/TopOffers.vue';

import ProductsSwipper from '@/components/ProductsSwipper.vue';
import { productModules } from '@/store/products';
import { mapActions , mapState} from 'pinia';

import TopCategoresVue from '@/components/TopCategores.vue';
import NewProductsVue from '@/components/NewProducts.vue';
import QualityFeatures from '@/components/QualityFeatures.vue';
import mobilePhones from '@/components/mobilePhones.vue';
import BandImg from '@/components/BandImg.vue';
import TopFragrances from '@/components/TopFragrances.vue'
import GroceriesSection from '@/components/GroceriesSection.vue';
import WhyShop from '@/components/WhyShop.vue'

export default {
  name: 'HomeView',
  components : {
    UpperBannerVue , 
    TheFeaturedVue ,
    TopOffers , 
    ProductsSwipper , 
    TopCategoresVue , 
    NewProductsVue , 
    QualityFeatures , 
    mobilePhones , 
    BandImg , 
    TopFragrances , 
    GroceriesSection , 
    WhyShop
  } , 
  computed : {
    ...mapState(productModules , ['flashDeals' , 'LaptopProducts' , 'mobPhones' , 'topFragrances' , 'topGroceries']) , 
    ...mapState(productModules , ['categories']) , 
  },
  methods : {
    ...mapActions(productModules , ['getProducts']),
    ...mapActions(productModules , ['getCategory']),
  } , 
  async mounted(){
    await this.getProducts()
    await this.getCategory()
  }, 
}
</script>

<style>
.home{
    overflow-x: hidden;
}
</style>
