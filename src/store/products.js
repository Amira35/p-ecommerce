import axios from 'axios';
import { defineStore } from 'pinia' 

export const productModules = defineStore('productModules' , ({
    state : ()=> {
        return {
            flashDeals : [] , 
            categories : [] , 
            LaptopProducts : [] , 
            mobPhones : [] , 
            topFragrances : [],
            topGroceries : [] , 
            categoriesPage : [
                {
                    title : "smartphones" , 
                    route : 'smartphones'
                }, 
                {
                    title : "laptops" , 
                    route : 'laptops'
                },
                {
                    title : "fragrances" , 
                    route : 'fragrances'
                },
                {
                    title : "groceries" , 
                    route : 'groceries'
                },
                {
                    title : "automotive" , 
                    route : 'automotive'
                },
                {
                    title : "motorcycle" , 
                    route : 'motorcycle'
                },
            ] , 
            productsCategory : [] , 
            productId : []
        }
    } , 
    actions : {
        async getProducts(){
            await axios.get('https://dummyjson.com/products')
            .then((res) => {
                this.LaptopProducts = res.data.products.filter((item )=> item.category === 'laptops');
                this.mobPhones = res.data.products.filter((item )=> item.category === 'smartphones');
                this.topFragrances = res.data.products.filter((item )=> item.category === 'fragrances');
                this.topGroceries = res.data.products.filter((item)=> item.category === 'groceries');
                this.flashDeals = res.data.products.splice(0 , 8);
                
                
            })
        } ,
        async getCategory(){
            await axios.get('https://dummyjson.com/products')
            .then((res) => this.categories = res.data.products.splice(0 , 12))
        } ,
        async getProductCategories(category){
            await axios.get(`https://dummyjson.com/products/category/${category}`)
            .then(res => this.productsCategory = res.data)
            
        }
        , 
        async getSingleCtegoryId(productId){
            await axios.get(`https://dummyjson.com/products/${productId}`)
            .then(res => this.productId = res.data )
        }
    }
}))