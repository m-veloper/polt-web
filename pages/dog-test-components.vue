<template>
  <div class="banner-wrapper">
    <!-- 인트로 페이지 -->
    <main v-if="page === 0">
      <img src="/onepiece.jpeg" alt="원피스 캐릭터들">
      <h1> 나와 닮은 원피스 캐릭터 찾기! </h1>
      <h2> 나와 닮은 원피스 캐릭터는 누구일까요?</h2>
      <Button text="테스트 시작!" :clickEvent="startTest"/>
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
