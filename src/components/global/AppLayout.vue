<template>
    <div class="layout position-relative">
        <v-layout>
            <AppDrawer :windowwidth="windowWidth" />
            <MenuDrawer :windowwidth="windowWidth" />
            <AppNavbarVue v-show="windowWidth > 990 " />
            <responsiveNav v-show="windowWidth <= 990" />
            <FixedNav />
            <v-main :style="{padding : windowWidth <= 990 ? '65px 0 0 0' : '127px 0 0 0 '}">
                <slot></slot>
            </v-main>
            <!-- <AppFooterVue/> -->
        </v-layout>
    </div>
</template>

<script>
import AppNavbarVue from './AppNavbar.vue';
// import AppFooterVue from './AppFooter.vue';
import AppDrawer from './AppDrawer.vue';
import FixedNav from './FixedNav.vue';
import responsiveNav from './responsiveNav.vue';
import MenuDrawer from './MenuDrawer.vue';

export default {
    name : 'AppLayout'  , 
    components : {
        AppNavbarVue , 
        // AppFooterVue , 
        AppDrawer , 
        FixedNav ,
        responsiveNav , 
        MenuDrawer
    },
    data : ()=>{
        return {
            windowWidth : 0 ,  
        }
    },
    mounted(){
        this.windowWidth = window.innerWidth 
        window.onresize = ()=>{
            this.windowWidth = window.innerWidth ;
            console.log(this.windowWidth);
        } 
    } , 
}
</script>
