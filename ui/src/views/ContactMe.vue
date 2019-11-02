<template>
  <div class="contactMe">
    <div class="contactMe__header">
      <div class="contactMe__header-main">
        <p>Hi!</p>
      </div>
      <div class="contactMe__header-subMain">
        <p>
          Please fill the info and I'll reply as soon as possible
        </p>
      </div>
    </div>
    <form @submit.prevent="handleSubmit" class="emailForm">
      <input class="input emailForm__50 emailForm__50-left"  type="text" v-model="form.name" placeholder="Name">
      <input class="input emailForm__50 emailForm__50-right"  type="text" v-model="form.lastName" placeholder="Last Name">
      <input class="input emailForm__100"  type="email" v-model="form.email" placeholder="Email">
      <textarea name="message" cols="30" rows="10" class="textArea" placeholder="Type here..." v-model="form.message"></textarea>
      <button type="submit" class="btn btn-rectangle btn-50 btn-right" :disabled="!isFormFilled" :class="{ btnDisabled: !isFormFilled }">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contactMe',
  data () {
    return {
      form: {
        name: '',
        lastName: '',
        email: '',
        message: ''
      }
    }
  },
  computed: {
    isFormFilled () {
      return this.form.name && this.form.lastName && this.form.email && this.form.message
    }
  },
  methods: {
    handleSubmit () {
      console.log('test')
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/components/_contactMe.scss";
</style>
