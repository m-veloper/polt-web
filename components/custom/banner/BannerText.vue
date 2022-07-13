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
              <h3 class="ui-title font-weight-bold main-title">나는 지금 반려동물을 키워도 되는 걸까?</h3>
              <p>막상 키우고 싶은데, 고민이 되신 적 있으신가요?</p>
              <v-img :src="require('@/assets/images/banner/banner-main-01.png')" style="width: 90%; margin: auto"/>
            </div>
          </v-col>
        </v-row>

        <div class="mt-16 pt-2 text-center">
          <div style="display: flex; justify-content: center">
            <n-link nuxt to="/dog-test-components" class="nav-link ButtonGeneral DefaultHomeHead__btn ButtonGeneral__white button3d">
              <span>반려견 주인자격 테스트</span>
            </n-link>
<!--            <n-link class="nav-link ButtonGeneral DefaultHomeHead__btn ButtonGeneral__white button3d" nuxt to="/">-->
<!--              <span>반려묘 테스트</span>-->
<!--            </n-link>-->
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
  .mini-spacer{
    padding: 10px 0 !important;
  }
  .main-title{
    font-size: 2rem;
  }
  .button3d {
    width: 250px;
    height: 50px;
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
    border: none;
    border-radius: 1.2rem;
    outline: transparent;
    -webkit-box-shadow: 0 .5rem 1.5rem 0 rgba(0, 0, 0, .1);
    box-shadow: 0 .5rem 1.5rem 0 rgba(0, 0, 0, .1);
    margin: 0 15px;
    text-decoration: none;
  }

  .ButtonGeneral:before {
    -webkit-transition: top .1s ease-out;
    transition: top .1s ease-out;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    /*top: -0.6rem;*/
    top: -0.45rem;
    left: 0;
    border-radius: 1.2rem;
    content: "";
  }

  .ButtonGeneral:hover:before {
    top: -.25rem
  }

  .ButtonGeneral span {
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: bold;
    -webkit-transition: transform .1s ease-out;
    transition: transform .1s ease-out
  }

  .ButtonGeneral:hover span {
    -webkit-transform: translateY(-.2rem) !important;
    transform: translateY(-.2rem) !important
  }

  .ButtonGeneral__white {
    background-color: #c12743;
  }

  .ButtonGeneral__white:before {
    background-color: #ff385c;
  }

  @media (max-width: 540px) {
    .main-title{
      font-size: 1.7rem;
    }

  }

</style>
