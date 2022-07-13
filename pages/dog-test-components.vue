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
                            <div style="text-align: center">
                                <img src="/img/pets.png" class="poster" id="pets">
                                <h1 class="main-title">반려견 주인 자격 테스트</h1>
                                <h4 class="sub-title">Pet Owner License Test</h4>
                            </div>
                            <div style="margin-bottom: 30px;">
                              <h3 class="">총 20개 문항으로 되어있어요~</h3>
                              <h3 class="">재미로 해볼 순 있지만 정말 고민 중이라면</h3>
                              <h3 class="">한 번 진지하게 테스트 해보면 어떨까요?</h3>
                            </div>
                            <TestButton text="시작" :clickEvent="startTest" class="intro-btn"/>
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

    #pets{
        width: 50%;
        height: auto;
    }

    .intro-btn a{
        width: 250px;
        height: 50px;
        margin: auto;
    }
</style>