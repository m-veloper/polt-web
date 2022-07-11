<template>
  <div>
      <div class="base-section">
          <v-container>
              <!-- -----------------------------------------------
                    Start Banner
                ----------------------------------------------- -->
              <v-row justify="center">
                  <v-col cols="12" md="7" lg="6" class="d-flex align-center" style="justify-content: center">
                      <div class="text-center text-md-left">

                        <!-- 인트로 페이지 -->
                        <main v-if="page===0">
<!--                          <img src="/poster.jpeg" alt="해리포터" class="poster">-->
<!--                          <h1 class="main-title">반려견 주인 자격 테스트</h1>-->
                          <h5 class="sub-title">Pet Owner License Test</h5>
                          <h5 class="sub-title">총 20개 문항으로 되어있어요~</h5>
                          <h5 class="sub-title">생명을 다루는 문제이니 진지하게 테스트 부탁드립니다.</h5>
                          <TestButton text="Test start" :clickEvent="startTest"/>
                        </main>

                        <!-- 질문 페이지 -->
                        <main class="question" v-else-if="page <= 20">
                          <Question />
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
import Question from "@/components/Question";
// import Question from '~/components/Question.vue'

/**
 * 메인 페이지 안에 들어갈 것
 * 1. 인트로 페이지
 * 2. 조건부 렌더링을 통해 퀴즈 컴포넌트가 보여야 함
 * 3. 결과는 페이지 이동 /result/_mbti
 */
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
  components: { Question },
  computed: {
    page() {
      return this.$store.state.page;
    }
  },
  methods: {
    startTest() {
      this.$store.commit("SET_PAGE", 1)
    }
  }
};
</script>

<style>
    .main-title, .sub-title {
        /*color: #ffffff;*/
    }

    .sub-title{
      margin-bottom: 50px;
    }

    .base-section{
        padding: 20px 0 20px;
        min-height: 600px;
        display: flex;
        align-items: center;
    }
</style>