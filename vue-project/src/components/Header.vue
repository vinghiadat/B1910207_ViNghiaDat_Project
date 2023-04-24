<template>
    <header>
            <nav>
                <div class="img-nav">
                    <img src="../assets/images/" alt="" />
                </div>
                <div class="content-nav">
                    <ul>
                        <li> <router-link to="/">Trang Chủ</router-link></li>
                        <li> <router-link to="/products">Sản Phẩm</router-link></li>
                        <li> <router-link to="/lienhe">Liên Hệ</router-link></li>
                        <li> <router-link to="/gioithieu">Giới Thiệu</router-link></li>
                        <li> <router-link to="/login">Đăng nhập</router-link></li>
                    </ul>
                    
                </div>
                <!-- The Modal -->
                <button id="cart" >
                    <router-link to="/giohang">
  <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                      Giỏ Hàng  

                    </router-link>
                    
                </button>
                <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Modal Heading</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          Modal body..
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-primary order">Thanh Toán</button>
        </div>

      </div>
    </div>
  </div>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Giỏ Hàng</h5>
                            <span class="close">&times;</span>
                        </div>
                        <div class="modal-body">
                            <div class="cart-row">
                                <span class="cart-item cart-header cart-column">Sản Phẩm</span>
                                <span class="cart-price cart-header cart-column">Giá</span>
                                <span class="cart-quantity cart-header cart-column">Số Lượng</span>
                            </div>
                            <div class="cart-items">
                                <!-- Xóa giỏ hàng -->
                                    <div class="cart-items">
                                <div class="cart-row">
                                <div class="cart-item cart-column">
                                    <img class="cart-item-image" src="https://bizweb.dktcdn.net/thumb/large/100/228/168/products/sualai.jpg?v=1573720306000" width="100" height="100">
                                    <span class="cart-item-title">Mũi Hàn 500</span>
                                </div>
                                <span class="cart-price cart-column">25000đ</span>
                                <div class="cart-quantity cart-column">
                                    <input class="cart-quantity-input" type="number" value="1">
                                    <button class="btn btn-danger" type="button">Xóa</button>
                                </div>
                            </div>
                            <div class="cart-row">
                                <div class="cart-item cart-column">
                                    <img class="cart-item-image" src="https://bizweb.dktcdn.net/thumb/large/100/228/168/products/sp1-a45a32a1-38d4-4a8a-9c37-e936013858b2.jpg?v=1575877003000" width="100" height="100">
                                    <span class="cart-item-title">Máy Bơm Chìm Hộ Gia Đình QDX 1500W 220VAC 40L/1min H=8m</span>
                                </div>
                                <span class="cart-price cart-column">1599000đ</span>
                                <div class="cart-quantity cart-column">
                                    <input class="cart-quantity-input" type="number" value="2">
                                    <button class="btn btn-danger" type="button">Xóa</button>
                                </div>
                            </div>
                            <div class="cart-total">
                                <strong class="cart-total-title">Tổng Cộng:</strong>
                                <span class="cart-total-price">3223000VNĐ</span>
                            </div>
                                <!-- Kết Thúc Xóa giỏ hàng -->
                            </div>
                            <div class="cart-total">
                                <strong class="cart-total-title">Tổng Cộng:</strong>
                                <span class="cart-total-price">0VNĐ</span>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary close-footer">Đóng</button>
                            <button type="button" class="btn btn-primary order">Thanh Toán</button>
                        </div>
                    </div>
                </div>// nếu xóa Code xóa đặt hàng thì xóa luôn chữ div này 
            </div>
            </nav>

    </header>
   

    

</template>

<style scoped>
.header {
    width: 100%;
    height: 50px;
    background-color: aquamarine;
}
.header ul {
    
}
.header ul li  {
display: inline;
    list-style: none;
    margin-right: 3%;
}
/* Phần Thanh Điều Hướng */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

li {
  list-style: none;
}

/* header */
nav {
  padding: 15px;
  width: 100%;
  display: flex;
  background: #d8bc57;
}

nav .content-nav {
  display: flex;
  line-height: 2rem;
  flex-direction: row;
  justify-content: flex-end;
  width: 60%;
}

nav .content-nav ul {
  display: flex;
}

nav .content-nav ul li a {
  text-decoration: none;
  color: #43433e;
  text-transform: uppercase;
  padding: 0 15px;
  font-weight: 800;
}

nav .content-nav ul li a:hover {
  color: #fff;
}

.content-nav form {
  position: relative;
}

.content-nav form input {
  border: none;
  background: #fff;
  padding: 7px;
  outline: none;
  border-radius: 12px;
}

.content-nav form button {
  padding: 5px;
  border-radius: 12px;
  position: absolute;
  right: 0;
  top: 2px;
  border: none;
  outline: none;
  background: #fff;
}

/* modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  margin: 0 auto;
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: .3rem;
  outline: 0;

}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  display: flex;
  border-top: 1px solid #aaaaaa;
  padding: 1rem;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 1px solid #aaaaaa;
  padding: 1rem;
}

.modal-footer>:not(:first-child) {
  margin-left: .25rem;
}

.btn {
  cursor: pointer;
  outline: none;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: .5rem 1rem;
  font-size: 1rem;
  border-radius: .25rem;
  transition: all .2s ease-in-out;
}

.btn-secondary {
  color: #292b2c;
  background-color: #fff;
  border-color: #ccc;
}

.btn-primary {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.modal-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #aaaaaa;
  padding: 1rem;
}

h5.modal-title {
  font-size: 1.5rem;
}

.close {
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

#cart {
  font-size: 15px;
  color: #fff;
  background: #c7b200;
  border: 1px solid transparent;
  border-radius: 10px;
  outline: none;
  margin-left: 1rem;
  padding: 12px;
  cursor: pointer;
}

#cart:hover {
  border-color: #fff;
}
/* CSS Xóa giỏ hàng  */
    /* cart */
.cart-header {
  font-weight: bold;
  font-size: 1.25em;
  color: #333;
}

.cart-column {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  margin-right: 1.5em;
  padding-bottom: 10px;
  margin-top: 10px;
}

.cart-row {
  display: flex;
}

.cart-item {
  width: 45%;
}

.cart-price {
  width: 20%;
  font-size: 1.2em;
  color: #333;
}

.cart-quantity {
  width: 35%;
}

.cart-item-title {
  color: #333;
  margin-left: .5em;
  font-size: 1.2em;
}

.cart-item-image {
  width: 75px;
  height: auto;
  border-radius: 10px;
}

.btn-danger {
  color: white;
  background-color: #EB5757;
  border: none;
  border-radius: .3em;
  font-weight: bold;
}

.btn-danger:hover {
  background-color: #CC4C4C;
}

.cart-quantity-input {
  height: 34px;
  width: 50px;
  border-radius: 5px;
  border: 1px solid #56CCF2;
  background-color: #eee;
  color: #333;
  padding: 0;
  text-align: center;
  font-size: 1.2em;
  margin-right: 25px;
}

.cart-row:last-child {
  border-bottom: 1px solid black;
}

.cart-row:last-child .cart-column {
  border: none;
}

.cart-total {
  text-align: end;
  margin-top: 10px;
  margin-right: 10px;
}

.cart-total-title {
  font-weight: bold;
  font-size: 1.5em;
  color: black;
  margin-right: 20px;
}

.cart-total-price {
  color: #333;
  font-size: 1.1em;
}
/* Kết Thúc CSS xóa giỏ hàng  */

/* footer */
.footer-item {
  padding: .5rem 2rem;
  background: #f1df11;
  display: flex;

}

.footer-item .img-footer {
  align-items: center;
  display: flex;
}

.footer-item .img-footer img {
  width: 100%;
}

.footer-item .social-footer {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
}

.footer-item .social-footer li a {
  color: #000000;
  font-size: 2rem;
}

.footer-item .social-footer li:last-child {
  margin-left: .5rem;
}
/* Footer */
/* footer */
.footer-item {
  padding: .5rem 2rem;
  background: #f1df11;
  display: flex;

}

.footer-item .img-footer {
  align-items: center;
  display: flex;
}

.footer-item .img-footer img {
  width: 100%;
}

.footer-item .social-footer {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
}

.footer-item .social-footer li a {
  color: #000000;
  font-size: 2rem;
}

.footer-item .social-footer li:last-child {
  margin-left: .5rem;
}
</style>
<script></script>