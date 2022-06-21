<template>
  <div class="mini-spacer">
    <!-- 인트로 페이지 -->
    <main v-if="page === 0">
      <img src="/onepiece.jpeg" alt="원피스 캐릭터들">
      <h1> 나와 닮은 원피스 캐릭터 찾기! </h1>
      <h2> 나와 닮은 원피스 캐릭터는 누구일까요?</h2>

      <Button text="테스트 시작!" :clickEvent="startTest" class=""/>
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


<style>
.button3d {
  width: 200px;
  height: 50px;

}

.ButtonGeneral * {
  position: relative;
  z-index: 2;
  -webkit-transform: translateY(-.4rem);
  transform: translateY(-.4rem)
}

.ButtonGeneral {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem 2.8rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 1.2rem;
  outline: transparent;
  -webkit-box-shadow: 0 .5rem 1.5rem 0 rgba(0, 0, 0, .1);
  box-shadow: 0 .5rem 1.5rem 0 rgba(0, 0, 0, .1);
  margin: 0 15px;
  text-decoration: none;
}

.ButtonGeneral:before {
  -webkit-transition: top .1s ease-out;
  transition: top .1s ease-out;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: -0.6rem;
  left: 0;
  border-radius: 1.2rem;
  content: "";
}

.ButtonGeneral:hover:before {
  top: -.4rem
}

.ButtonGeneral span {
  color: #ffffff;
  -webkit-transition: transform .1s ease-out;
  transition: transform .1s ease-out
}

.ButtonGeneral:hover span {
  -webkit-transform: translateY(-.2rem) !important;
  transform: translateY(-.2rem) !important
}

.ButtonGeneral__white {
  background-color: #ba9ae1;
}

.ButtonGeneral__white:before {
  background-color: #ff4d7e;
}

</style>