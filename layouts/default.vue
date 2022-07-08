<template>
  <v-app dark>
    <!--v-if="$route.name!=='login'"-->
    <Header />
    <v-main>
      <nuxt />
    </v-main>
<!--    <Footer />-->
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      title: "Polt | Pet Owner License Test",
      meta: [
        {
          hid: "description",
          name: "NuxtJs UI kit",
          content: "NuxtJs UI kit is the best way"
        }
      ]
    };
  },
  components: {
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer")
  },
  methods: {}
};
</script>