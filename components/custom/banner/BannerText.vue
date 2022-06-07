<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Banner Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">나는 지금 반려동물을 키워도 되는 걸까?</h2>
              <p>
                막상 키우고 싶은데, 고민이 되신 적 있으신가요?
              </p>
              <v-img
                :src="require('@/assets/images/banner/banner-main-01.png')"
              />
            </div>
          </v-col>
        </v-row>

        <div class="mt-16 pt-2 text-center">
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
                  color="error"
                  elevation="0"
          >
            Upgrade to Pro
          </v-btn>
        </div>

        <div class="text-center">
          <div class="btn-groups">
            <v-btn class="ButtonGeneral DefaultHomeHead__btn ButtonGeneral__white button3d"> Normal </v-btn>
            <v-btn pressed> Normal </v-btn>
            <v-btn depressed color=""> Primary </v-btn>
            <v-btn depressed color="accent"> Accent </v-btn>
            <v-btn depressed color="error"> Error </v-btn>
            <v-btn depressed color="warning"> Warning </v-btn>
            <v-btn depressed color="success"> Success </v-btn>
<!--            <a pressed href="/" class="ButtonGeneral DefaultHomeHead__btn ButtonGeneral__white button3d">-->
<!--              <span>반려견 주인자격 테스트</span>-->
<!--            </a>-->
<!--            <a href="/" class="ButtonGeneral DefaultHomeHead__btn ButtonGeneral__white button3d">-->
<!--              <span>반려묘 주인자격 테스트</span>-->
<!--            </a>-->
          </div>
        </div>
        <div class="text-center mt-12">
          <div class="btn-groups">
            <v-btn outlined> Normal </v-btn>
            <v-btn outlined color="primary"> Primary </v-btn>
            <v-btn outlined color="accent"> Accent </v-btn>
            <v-btn outlined color="error"> Error </v-btn>
            <v-btn outlined color="warning"> Warning </v-btn>
            <v-btn outlined color="success"> Success </v-btn>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerText",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>

  .button3d {
    width: 200px;
    margin: auto;
    font-family: Highlight Font ko,Noto Sans KR,sans-serif;
  }

  .ButtonGeneral * {
    position: relative;
    z-index: 2;
    -webkit-transform: translateY(-.4rem);
    transform: translateY(-.4rem)
  }

  .ButtonGeneral {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.3rem 2.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    border: none;
    border-radius: 1.2rem;
    outline: transparent;
    -webkit-box-shadow: 0 .5rem 1.5rem 0 rgba(0, 0, 0, .1);
    box-shadow: 0 .5rem 1.5rem 0 rgba(0, 0, 0, .1);
    cursor: pointer
  }

  .ButtonGeneral:before {
    -webkit-transition: top .1s ease-out;
    transition: top .1s ease-out;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: -0.6rem;
    left: 0;
    border-radius: 1.2rem;
    content: "";
  }

  .ButtonGeneral:hover:before {
    top: -.4rem
  }

  .ButtonGeneral span {
    -webkit-transition: transform .1s ease-out;
    transition: transform .1s ease-out
  }

  .ButtonGeneral:hover span {
    -webkit-transform: translateY(-.2rem) !important;
    transform: translateY(-.2rem) !important
  }

  .ButtonGeneral__white {
    background-color: #ba9ae1;
  }

  .ButtonGeneral__white:before {
    background-color: #fff;
  }

  /*.button3d {
    width: 200px;
    margin: auto;
    font-family: Highlight Font ko,Noto Sans KR,sans-serif;
  }

  .ButtonGeneral * {
    position: relative;
    z-index: 2;
    -webkit-transform: translateY(-.4rem);
    transform: translateY(-.4rem)
  }

  .ButtonGeneral {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.3rem 2.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    border: none;
    border-radius: 1.2rem;
    outline: transparent;
    -webkit-box-shadow: 0 .5rem 1.5rem 0 rgba(0, 0, 0, .1);
    box-shadow: 0 .5rem 1.5rem 0 rgba(0, 0, 0, .1);
    cursor: pointer
  }

  .ButtonGeneral:before {
    -webkit-transition: top .1s ease-out;
    transition: top .1s ease-out;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: -0.6rem;
    left: 0;
    border-radius: 1.2rem;
    content: "";
  }

  .ButtonGeneral:hover:before {
    top: -.4rem
  }

  .ButtonGeneral span {
    -webkit-transition: transform .1s ease-out;
    transition: transform .1s ease-out
  }

  .ButtonGeneral:hover span {
    -webkit-transform: translateY(-.2rem) !important;
    transform: translateY(-.2rem) !important
  }

  .ButtonGeneral__white {
    background-color: #ba9ae1;
  }

  .ButtonGeneral__white:before {
    background-color: #fff;
  }*/

</style>
