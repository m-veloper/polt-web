<template>
  <div>
    <div class="banner-wrapper">
      <v-container>
        <!-- -----------------------------------------------
              Start Banner
          ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="7" lg="6" class="d-flex align-center">
            <div class="text-center text-md-left" id="result-section">
              <main>
                <div style="text-align: center">
                  <img :src="result[grade].img" :alt="result[grade].title">
                </div>
                <div class="contain" style="margin-bottom: 50px;">
                  <h1>{{result[grade].title}}</h1>
                  <!-- v-html 은 보안상의 문제, XSS 와 같은 문제가 있을 수 있다.
                    그러므로 반드시 사용자가 컨트롤하거나 악용할 수 있는 문제에는 사용해선 안 된다.
                    오직 개발자가 의도한 값만 표출해줄 때 사용해주면 된다. -->
                  <p v-html="result[grade].description"></p>
                </div>
                <TestButton text="다시 테스트하기!" :clickEvent="resetPage" class="intro-btn" />
              </main>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grade: null,
      result: {
        A: {
          img: "/img/dog/gradeA.png",
          title: "와우 A등급 입니다.",
          description: `<b>"좋은 견주가 될 준비가 된 거 같아요"</b>
          <br/>`
        },
        B: {
          img: "/img/dog/gradeB.png",
          title: "B 등급입니다. 괜찮네요",
          description: `<b>"조금 더 노력하면 좋은 견주가 될 거 같아요"</b>
          <br/>`
        },
        C: {
          img: "/img/dog/gradeC.png",
          title: "C 등급이에요..노력이 필요해 보여요..",
          description: `<b>"많은 노력이 필요해 보입니다. 반려견을 키우는걸 조금 더 고민해 보는 건 어떨까요?"</b>
          <br/>`
        },
        F: {
          img: "/img/dog/gradeF.png",
          title: "F등급 입니다. 자격 미달이에요",
          description: `<b>"저는 자격 미달이라고 생각해요. 아주 많은 노력과 공부 가 필요해 보여요."</b>
          <br/>`
        }
      }
    }
  },
  created() {
    this.grade = this.$route.params.grade;
    console.log(this.grade);
    console.log(this.$router);
    if (this.result[this.$route.params.grade] === undefined) {
      this.$router.push({name: "index"})
    }
  },
  methods: {
    resetPage() {
      this.$store.dispatch('clickResetButton')
      this.$router.push({name: "index"})
    }
  }
}
</script>

<style>
  #result-section img{
    width: 35%;
    height: auto;
  }
  h1 {
    font-size: 2em;
    /*text-shadow: 0 0 50px rgb(40, 40, 187), 0 0 3px #fff;*/
  }

  p {
    font-size: 18px;
    /*color: #fff;*/
    line-height: 1.5;
  }
  
  main .contain p > b {
    font-size: 25px;
  }
</style>