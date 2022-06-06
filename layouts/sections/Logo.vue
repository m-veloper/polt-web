<template>
  <div class="logo">
    <NLink to="/">
<!--      <v-img-->
<!--        :src="require('@/assets/images/logos/white-text.png')"-->
<!--        alt="logo"-->
<!--      />-->ddddd
      <h1 class="gugi-font">Polt</h1>
    </NLink>
  </div>
</template>

<script>
export default {
  name: "Logo",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.logo a {
  display: flex;
  text-decoration: none;
}

.logo a h1{
    color: #FFFFFF;
    font-size: 45px;
}
</style>