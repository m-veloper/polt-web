<template>
  <div class="banner-wrapper">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="d-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold white--text">
              나는 과연 반려동물을 키울 자격을 갖추고있을까?
            </h1>
<!--            <h4 class="banner-subtitle white&#45;&#45;text font-weight-regular">-->
<!--              Free Vuetify UI Kit with Lots of Ready to Use Sections-->
<!--            </h4>-->
            <div class="mt-16 pt-2">
              <v-btn
                color="error"
                class="mr-0 mr-md-8 mb-5 mb-md-0 btn-custom-md"
                nuxt
                large
                target="_blank"
                href="/"
                elevation="0"
              >
                Download Free
              </v-btn>
              <v-btn
                nuxt
                large
                to="/coming-soon"
                class="btn-custom-md"
                outlined
                color="white"
                elevation="0"
              >
                Upgrade to Pro
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="6">
          <v-img
            :src="require('@/assets/images/landingpage/main_01.svg')"
            alt="banner"
          />
          <!--https://undraw.co/-->
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {};
  }
};
</script>
