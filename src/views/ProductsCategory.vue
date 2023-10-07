<template>
    <div class="products-category">
        <v-container>
            <h1 class="my-5">{{ $route.params.title }}</h1>
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="3" class="text-center" v-for="prod in productsCategory.products" :key="prod.id">
                    <v-card elevation="0">
                        <img :src="showItem[prod.title] ? showItem[prod.title] : prod.thumbnail" class="w-100" style="height: 200px;">
                        <v-card-text>
                            {{ `(${prod.title}) ${prod.description}`.length <= 51 ? `(${prod.title}) ${prod.description}`
                            : `(${prod.title}) ${prod.description}`.substring(0,51) + '...' }}
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
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { productModules } from '@/store/products';
import { mapActions  , mapState} from 'pinia';
export default {
    computed : {
        ...mapState(productModules , ['productsCategory'])
    },
    methods:{
        ...mapActions(productModules , ['getProductCategories'])
    } , 
    watch:{
        $route(){
            document.documentElement.scrollTo(0 , 0)
            this.getProductCategories(this.$route.params.category)
        }
    },
    async mounted(){
        await this.getProductCategories(this.$route.params.category)
    } ,
    data : ()=>{
        return {
            showItem : {}
        }
    }
}
</script>



<style>
.products-category{
    padding-top:12px ;
}
</style>
