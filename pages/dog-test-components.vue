<template>
  <div>
      <div class="banner-wrapper">
          <v-container>
              <!-- -----------------------------------------------
                    Start Banner
                ----------------------------------------------- -->
              <v-row justify="center">
                  <v-col cols="12" md="7" lg="6" class="d-flex align-center">
                      <div class="text-center text-md-left">

                          <main v-if="page === 0">
                              <!--      <img src="/onepiece.jpeg" alt="원피스 캐릭터들">-->
                              <h1 class="gugi-font" id="test-title"> Pet Owner License Test </h1>
<!--                                    <h2> 나의 자격은?</h2>-->

                                    <TestButton text="테스트 시작!" :clickEvent="startTest" class=""/>
                          </main>

                          <!-- 질문 페이지 -->
                          <main v-else-if="page < 5">
                              <Question />
                          </main>

                          <!-- 결과 페이지 -->
                          <main v-else-if = "page === 5">
                              <Result />
                          </main>
                      </div>
                  </v-col>
              </v-row>
              <!-- -----------------------------------------------
                    End Banner
                ----------------------------------------------- -->
          </v-container>
      </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Dog Test Components",
      meta: [
        {
          hid: "de scription",
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
  },

  computed: {
    page() {
      return this.$store.state.page;
    },
  },
  methods:{
    startTest(){
      this.$store.commit("SET_PAGE",1)
    }
  }
};
</script>


<style>
    #test-title {
        color: #ffffff;
    }
</style>