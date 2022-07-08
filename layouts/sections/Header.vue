<template>
  <div class="top-bar">
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar color="deep-purple accent-4" app absolute class="app-header" flat elevate-on-scroll>
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <Logo />
        <v-spacer></v-spacer>
        <v-btn class="d-block d-md-none" text @click="toggleClass()">
          <v-app-bar-nav-icon class="white--text" />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/"> Test 시작하기 </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/basic-components">
                Basic Components
              </n-link>
            </li>
            <li class="nav-item">
              <!-- login-regiter -->
              <v-btn
                color="white"
                nuxt
                target="_blank"
                href="/"
                elevation="0"
              >
                로그인
              </v-btn>
            </li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "Header",

  components: {
    Logo: () => import("@/layouts/sections/Logo")
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleClass: function(event) {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
  .top-bar{
    background: #fdbfa8;
    height: 100px;
  }
</style>

