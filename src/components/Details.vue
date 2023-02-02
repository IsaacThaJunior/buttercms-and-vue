<template>
  <h1 class="title">FAQs with ButterCMS</h1>
  <h2>{{
    value.question_asked
  }}</h2>
  <p>Answered by {{
    value.question_answered_by
  }} on {{
  value.question_answered_on
    .slice(0, 10)
}} </p>
  <div class="card">
    <div class="wrapper">
      <div v-html="value.answer_to_the_question
      "></div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      value: null,
    };

  },

  created() {
    var resp = this.$route.query.post
    this.value =
      JSON.parse(resp);
  },
}
</script>

<style lang="scss" scoped>
h2 {
  color: black;
}

p {
  color: black;
}

.title {
  color: black;
}

.wrapper {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.card {
  background-color: black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 4px 10px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  width: 800px;

  &>p {
    color: white;
    font-size: 18px;
    padding-top: 30px;
  }
}
</style>