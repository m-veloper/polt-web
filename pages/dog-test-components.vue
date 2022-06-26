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

                        <!-- 인트로 페이지 -->
                        <main v-if="page===0">
                          <img src="/poster.jpeg" alt="해리포터" class="poster">
                          <h1>나와 닮은 해리포터 캐릭터 찾기</h1>
                          <TestButton text="Test start" :clickEvent="startTest"/>
                        </main>

                        <!-- 질문 페이지 -->
                        <main class="question" v-else-if="page <= 12">
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
    #test-title {
        color: #ffffff;
    }
</style>