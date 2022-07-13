<template>
  <div>
    <!-- 질문 -->
<!--    <h1 class="question-title" style="margin-bottom: 30px;">{{page}}. {{question}}</h1>-->
    <h1 class="question-title" style="margin-bottom: 30px;" v-html="question"></h1>
    <div id="testBtn-section" style="display: flex;">
      <!-- 답 선택 -->
      <TestButton class="question-btn"
              v-for="(item, index) in answers"
              styleType="blue"
              :key="index"
              :text="item.text"
              :clickEvent="() => {
      clickButton(item)
    }"
      />
    </div>

    <!-- 진행바 -->
    <Progress />  
  </div>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.page
    },

    question() {
      return this.$store.state.questions[this.$store.state.page - 1].q
    }, 
    answers() {
      return this.$store.state.questions[this.$store.state.page - 1].a
    }
  },
  methods: {
    clickButton(item) {
      this.$store.dispatch('clickButton', item.value);
      // 마지막 질문일 때만 라우터 이동
      if(this.page === this.$store.state.questions.length + 1) {
        const result = this.$store.state.result;

        // 전체 점수 합계
        // 토탈 점수를 100점으로 환산
        // A 1개당 5점
        // B 1개당 3점
        // C 1개당 1점
        let scoreA = (result.A * 5);
        let scoreB = (result.B * 3);
        let scoreC = (result.C * 1);
        let totalScore = (scoreA + scoreB + scoreC);

        this.$router.push({
          name: 'result-mbti',
          // route돼서 result/params 이 params 안에 내용이 담기게 된다
          params: {
            // mbti: `${result.e > 1 ? "e" : "i"}${result.n > 1 ? "n" : "s"}${result.f > 1 ? "f" : "t"}${result.j > 1 ? "j" : "p"}`
            grade: `${this.makeResultMst(totalScore)}`
          }
        })
      }
    },
    makeResultMst(totalScore){
      let grade = '';
      if (totalScore >= 80 && totalScore <= 100 ){
        return grade = "A";
      }else if (totalScore <= 79 && totalScore >= 60){
        return grade = "B";
      }else if (totalScore <= 59 && totalScore >= 30){
        return grade = "C";
      }else {
        return grade = "F";
      }
    }
  }
}
</script>

<style>
  .question-title {
    font-size: 1.3rem;
  }
  #testBtn-section{
    justify-content: center;
  }
  #testBtn-section .select-section a {
    width: 250px;
    height: 65px;
  }

  @media (max-width: 991px) {
    #testBtn-section {
      flex-direction: column;
      justify-content: space-between

    }

    #testBtn-section .select-section {
      margin-bottom: 35px;
    }

    .question-title {
      font-size: 1.3rem;
    }
  }
</style>