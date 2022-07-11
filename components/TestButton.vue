<template>
  <div class="select-section">
      <a :class="[styleType]" class="ButtonGeneral DefaultHomeHead__btn ButtonGeneral__white button3d"  @click.prevent="clickEvent">
        <span v-html="text"></span>
      </a>
  </div>
</template>

<script>
export default {
  props: {
    clickEvent: {
      type: Function
    },
    text: {
      type: String,
      default: ""
    },
    styleType:{
      type: String,
      default: "pink"
    }
  }
}
</script>

<style>
</style>

