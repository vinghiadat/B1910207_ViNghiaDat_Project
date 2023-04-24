
<template>
    <Header />
     <!-- content -->
     <form>
                            <input type="text" v-model="searchText" name="search" placeholder="Tìm kiếm sản phẩm..." />
                        </form>
            <section class="wrapper">
                
                <div class="products">
                    <ul>

                        <li v-for="(non,index) in ketqualoc" v-key="index" class="main-product">
                            <div class="img-product">
                                <img class="img-prd"
                                    :src="non.HinhAnh"
                                    alt="">
                            </div>
                            <div class="content-product">
                                <h3 class="content-product-h3">{{ non.TenDongHo }}</h3>
                                <div class="content-product-deltals">
                                    <div class="price">
                                        <span class="money">{{ non.GiaBan }}đ</span>
                                    </div>
                                    <button type="button" class="btn btn-cart" @click="addToCart(non)">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </section>
    <Footer />
    
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import axios from "axios";

import { reactive, computed,ref } from "vue"
export default {
    name: 'App',
    components: {
        Header,
        Footer
    },
    setup() {
        const searchText = ref("");
        const data = reactive({
            non: [],
            cartData: []
        });
        const isChecked = ref(false);
        let ketqualoc = computed(() => {
            return data.non.filter((e) =>
                e.TenDongHo.toLowerCase().includes(searchText.value.toLowerCase())
            );
        });
        async function getAllNon(){
            try{
                const response = await axios.get("http://localhost:3000/DongHo/GetAllDongHo");
                console.log(response)
                data.non = response.data;
            }catch(e){

            }
        }
        async function addToCart(non) {
          if(localStorage.getItem("token")==null){
            alert("Bạn phải đăng nhập trước khi đặt hàng");
          }else{
            try{
              if(localStorage.getItem("cart")!=null){
                data.cartData = JSON.parse(localStorage.getItem("cart"));
              }
              const response = await axios.get(`http://localhost:3000/DongHo/GetAllDongHo/${non._id}`);
              for(var i = 0;i<data.cartData.length;i++){
                if(non._id == data.cartData[i]._id){
                  data.cartData[i].soluong++;
                  isChecked.value = true;
                  break;
                }
                isChecked.value = false;
              }
              if(isChecked.value==false){
                response.data.soluong = 1;
                data.cartData.push(response.data);
              }
              
              localStorage.setItem("cart",JSON.stringify(data.cartData));
              console.log(localStorage.getItem("cart"));
            }catch(e){

            }
          }
        }
        getAllNon();
        return {
          addToCart,
            searchText,
            ketqualoc,
            data,
        }
    }
}
</script>
<style scoped>
    /* Content */
/* wrapper */
.wrapper {
  padding: 2rem;
}

.products ul {
  display: inline-block;
}

.products ul .main-product {
  margin-bottom: 2rem;
  margin-right: 1rem;
  display: block;
  float: left;
  width: 24%;
}

.products ul .no-margin {
  margin-right: 0;
}

.products ul .img-product img {
  width: 100%;
}

.content-product .content-product-h3 {
  padding: .5rem 0;
  overflow: hidden;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  max-height: 50px;
  min-height: 50px;
  text-align: center;
  line-height: 19px;
  margin: 0 0 5px;
}

.content-product .content-product-deltals {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

.main-product .content-product .content-product-deltals .price {
  color: #c7b200;
  font-weight: 700;
  margin-right: 1rem;
  vertical-align: middle;
  font-size: 20px;
}

.content-product .content-product-deltals .price .money {
  vertical-align: middle;
}

.content-product .content-product-deltals .btn-cart {
  background: #f1df11;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
}

.content-product .content-product-deltals .btn-cart:hover {
  background: #c7b200;
}
</style>