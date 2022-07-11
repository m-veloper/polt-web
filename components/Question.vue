<template>
  <div>
    <!-- 질문 -->
<!--    <h1 style="margin-bottom: 30px;">{{page}}. {{question}}</h1>-->
    <div id="testBtn-section" style="display: flex;">
      <!-- 답 선택 -->
      <TestButton
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
      switch(totalScore) { // 범위 사용 시에는 switch에 true 사용
        case (totalScore <= 100 || totalScore >= 80): // 점수 : 80 ~ 100
          console.log("점수 : 80 ~ 100 : " + totalScore + "점");
          return grade = "A";
          break;
        case (totalScore <= 79 || totalScore >= 60): // 점수 : 60 ~ 79
          console.log("점수 : 60 ~ 79 : " + totalScore + "점");
          return grade = "B";
          break;
        case (totalScore <= 59 || totalScore >= 30): // 점수 : 30 ~ 59
          console.log("점수 : 30 ~ 59 : " + totalScore + "점");
          return grade = "C";
          break;
        default:
          console.log("점수 : 29 이하 : " + totalScore + "점"); // 점수 : 29 이하
          return grade = "D";
          break;
      }
    }
  }
}
</script>

<style>
  h1 {
    font-size: 1.5rem;
  }

  @media (max-width: 991px) {
    #testBtn-section {
      flex-direction: column;
      justify-content: space-between
    }

    #testBtn-section .select-section {
      margin-bottom: 35px;
    }
  }
</style>