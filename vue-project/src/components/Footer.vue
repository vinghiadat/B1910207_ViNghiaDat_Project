<template>
    <!-- footer -->
            <footer>
                <div class="footer-item">
                    <div class="img-footer">
                        <img src="../assets/images/logo201.png" alt="" />
                    </div>
                    <div class="social-footer">
                        <li><a target="_blank" href="">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            </a></li>
                        <li><a target="_blank" href="https://github.com/vinghiadat/B1910207_ViNghiaDat_Project.git">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                            </a></li>

                    </div>
                </div>
            </footer>

</template>
<style scoped>
    /* Footer */
/* footer */
.footer-item {
  padding: .5rem 2rem;
  background: #545452;
  display: flex;

}

.footer-item .img-footer {
  align-items: center;
  display: flex;
}

.footer-item .img-footer img {
  width: 40%;
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