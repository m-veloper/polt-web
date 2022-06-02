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

        <!-- -----------------------------------------------
            End Banner Text
        ----------------------------------------------- -->
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
