<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>
<template>
    <Header />
    <div class="lienhe" style="margin-bottom: 5%;">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841454343738!2d105.76842661468002!3d10.029938975270296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1662731557466!5m2!1svi!2s"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <section class="main_contact">
            <h2 style="font-weight:bold;color:#b2b509">Ý kiến đóng góp</h2>
            <h3 style="font-weight:bold;color:#b2b509">Những ý kiến đánh giá, đóng góp từ quý khách sẽ giúp Mona dần trở nên
                hoàn thiện hơn!

            </h3>
            <form class="form_contribute" method="GET" id="form-phanhoi" style="margin:0 auto;">
                <div class="inputGroup">
                    <label for="">Họ tên</label>
                    <input type="text" required name="hoten">
                </div>
                <div class="inputGroup">
                    <label for="">Email</label>
                    <input type="text" required name="email">
                </div>
                <div class="inputGroup">
                    <label for="">Hình thức</label>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example"
                        id="exampleFormControlInput3" name="hinhthuc">
                        <option selected value=''> Chọn hình thức</option>
                        <option value="Thái độ nhân viên">Về thái độ phục vụ khách hàng</option>
                        <option value="Chất lượng sản phẩm">Về chất lượng sản phẩm</option>
                        <option value="Giá thành sản phẩm">Về giá thành sản phẩm</option>
                    </select>
                </div>
                <div class="inputGroup">
                    <label for="">Nội dung</label>
                    <input type="text" required name="noidung">
                </div>
                <div class="inputGroup">

                    <input type="submit" name="submitphanhoi" value="GỬI" class="btn btn-success">
                </div>
            </form>

        </section>
    </div>




    <Footer />
</template>
<style scoped>
.inputGroup {
    margin-bottom: 10px;
}

.inputGroup select,
.inputGroup input[type='text'] {
    width: 50%;
}

.inputGroup label {
    width: 120px;
    font-weight: bold;
}

.main_contact h2,
.main_contact h3 {
    font-family: 'Nunito', sans-serif;
    text-align: center;
    margin-top: 10px;
}

.main_contact h2 {
    font-size: 25px;
}

.main_contact h3 {
    font-size: 18px;
    font-weight: normal;
}</style>