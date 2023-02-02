
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
    console.log(this.value.question_asked)
  },

}

</script>

<style lang="scss" scoped>
html,
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
}

h2 {
  color: black;
  /* padding-bottom: 30px; */
}

p {
  color: black;
  /* padding-bottom: 30px; */
}


.title {
  color: black;
  padding-bottom: 30px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: start;
}

.card {
  background-color: black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 4px 10px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  width: 800px;
  /* margin: 20px; */
  /* transition: 0.15s all ease-in-out; */

  &>p {
    color: white;
    font-size: 18px;
    padding-top: 30px;
  }

  color: white;

  a {
    text-decoration: none;
    padding: 12px;
    color: #03a9f4;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 100px;
    }

    small {
      font-size: 10px;
      padding: 4px;
    }
  }
}
</style>
