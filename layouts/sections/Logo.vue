<template>
  <div class="logo">
    <NLink to="/">
<!--      <v-img-->
<!--        :src="require('@/assets/images/logos/white-text.png')"-->
<!--        alt="logo"-->
<!--      />-->
<!--      <v-img :src="require('/img//dog.svg')" alt="logo"/>-->
        <img src="/img//dog.svg">
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
        color: #ff385c;
        font-size: 2rem;
    }
    .logo img{
        width: 35px;
        height: auto;
        margin-right: 7px;
    }

    @media (max-width: 767px) {
        .logo a h1{
            color: #ff385c;
            font-size: 1.5rem;
        }
        .logo img{
            width: 27px;
            height: auto;
            margin-right: 7px;
        }
    }

</style>