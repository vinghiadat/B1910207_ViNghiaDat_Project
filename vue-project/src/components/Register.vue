<template>
    <form @submit.prevent="submit">
        <div class="container">
            <h1>Form Đăng Ký</h1>
            <p>Xin hãy nhập biểu mẫu bên dưới để đăng ký.</p>
            <hr />

            <label for="HoTen"><b>Họ Tên</b></label>
            <input type="text" placeholder="Nhập Họ tên" name="HoTen" v-model="HoTen" required />

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Nhập Email" name="email" v-model="Email" required />

            <label for="psw"><b>Mật Khẩu</b></label>
            <input type="password" placeholder="Nhập Mật Khẩu" name="password" v-model="MatKhau" required />

            <label for="sdt"><b>Nhập Số điện thoại</b></label>
            <input type="text" placeholder="Nhập Số điện thoại" name="sdt" v-model="SDT" required />

            <label>
                <input type="checkbox"  name="remember" style="margin-bottom: 15px" />
                Nhớ Đăng Nhập
            </label>

            <div class="clearfix">
                <button type="submit" class="signupbtn">Sign Up</button>
            </div>
            <router-link to="/login">

                <div class="clearfix">
                        <button type="submit" class="signupbtn">Login</button>
                    </div>
            </router-link>
            
        </div>
    </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
    setup() {
        const router = useRouter();
        const HoTen = ref("");
        const Email = ref("");
        const MatKhau = ref("");
        const SDT = ref("");
        async function submit() {
            try {
                const response = await axios.post("http://localhost:3000/users/DangKy", {
                    Email: Email.value,
                    MatKhau: MatKhau.value,
                    HoTen : HoTen.value,
                    SDT: SDT.value,
                })
                if(response.data.message){
                    alert("Email đã tồn tại");
                }else{
                    alert("Đăng ký tài khoản thành công");
                }
                
            } catch (e) {
                
            }
        }
        return {
            Email,
            MatKhau, 
            HoTen,
            SDT,
            submit
        }
    }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");

* {
    box-sizing: border-box;
}

body {
    font-family: "Noto Sans JP", sans-serif;
}

h1,
label {
    color: DodgerBlue;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    width: 100%;
    resize: vertical;
    padding: 15px;
    border-radius: 15px;
    border: 0;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

input[type="text"]:focus,
input[type="password"]:focus {
    outline: none;
}

hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

button:hover {
    opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.signupbtn {
    float: left;
    width: 100%;
    border-radius: 15px;
    border: 0;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Add padding to container elements */
.container {
    padding: 16px;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}</style>
