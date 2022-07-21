<template>
  <div>
    <!-- -----------------------------------------------
    Banner
    ----------------------------------------------- -->
<!--    <Banner />-->
    <BannerText />
    <!-- -----------------------------------------------
    ./ Banner
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    All Components
    ----------------------------------------------- -->
<!--    <AllCustomComponents />-->
    <!-- -----------------------------------------------
    ./ All Components
    ----------------------------------------------- -->
    <!-- -----------------------------------------------
    Coming Soon
    ----------------------------------------------- -->
<!--    <ComingSoon />-->
    <!-- -----------------------------------------------
    ./ Coming Soon
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Polt | 반려동물 주인 자격 테스트",
      meta: [
        {
          hid: "description",
          name: "Next Ui Kit",
          content: "Next Ui Kit is the best way",
        },
      ],
    };
  },

  data() {
    return {};
  },
  components: {
    Banner: () => import("@/components/shared/lp-banner/Banner"),
    BannerText: () => import("@/components/custom/banner/BannerText"),
    ComingSoon: () => import("@/components/shared/coming-soon/ComingSoon"),
    AllCustomComponents: () => import("@/components/custom/AllCustomComponents"),
  },
};
</script>
