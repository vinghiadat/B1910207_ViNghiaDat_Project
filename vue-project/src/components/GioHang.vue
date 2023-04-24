<template>
    <Header />
    <div class="container">
        <table class="table">
            <thead >
                <tr class="table-dark text-center">
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Gía</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Thao tác</th>
                </tr>
                
            </thead>
            <tbody>
                <tr class="text-center" v-for="(item,index) in data.cartData" v-key="index">
                    <td>{{  index+1 }}</td>
                    <td>{{ item.TenDongHo }}</td>
                    <td>{{ item.GiaBan }}</td>
                    <td>
                        <img :src="item.HinhAnh" alt="">
                        </td>
                    <td>{{ item.soluong }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <Footer />
</template>
<style scoped>
    img {
        width: 20%;
        height: 30%;
    }
</style>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import axios from "axios";

import { reactive, computed, ref } from "vue"
export default {
    components: {
        Header,
        Footer
    },
    setup(){
        const data = reactive({
            cartData: []
        });
        if(localStorage.getItem("cart") !=null){
            data.cartData = JSON.parse(localStorage.getItem("cart"));
        }
        return {
            data,
        }
    }

}
</script>