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
      <input class="input emailForm__50 emailForm__50-left"  type="text" v-model="form.name" placeholder="Name" :disabled="isLoading">
      <input class="input emailForm__50 emailForm__50-right"  type="text" v-model="form.lastName" placeholder="Last Name" :disabled="isLoading">
      <input class="input emailForm__100"  type="email" v-model="form.email" placeholder="Email" :disabled="isLoading">
      <textarea name="message" cols="30" rows="10" class="textArea" placeholder="Type here..." v-model="form.message" :disabled="isLoading"></textarea>
      <div class="contactMe__state" v-if="isLoading">
       <pulse-loader :loading="isLoading" :color="color"></pulse-loader>
      </div>
      <div class="contactMe__errMsg">
        <div v-if="errorMsg">
          {{ errorMsg }}
        </div>
      </div>
      <button v-if="!isLoading && !isEmailSent" type="submit" class="btn btn-rectangle btn-50 btn-right" :disabled="!isFormFilled" :class="{ btnDisabled: !isFormFilled }">Send</button>
      <div class="contactMe__state emailSent" v-if="isEmailSent">
        &#x2714; Sent
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'contactMe',
  data () {
    return {
      form: {
        name: '',
        lastName: '',
        email: '',
        message: ''
      },
      color: '#1292E6'
    }
  },
  computed: {
    ...mapGetters(['getIsLoading', 'getIsEmailSent', 'getErrorMsg']),
    isFormFilled () {
      return this.form.name && this.form.lastName && this.form.email && this.form.message
    },
    isLoading () {
      return this.getIsLoading
    },
    isEmailSent () {
      return this.getIsEmailSent
    },
    errorMsg () {
      return this.getErrorMsg
    }
  },
  methods: {
    ...mapActions(['contactMe']),
    handleSubmit () {
      this.contactMe(this.form)
    }
  },
  watch: {
    form: {
      handler: function (val, oldval) {
        if (this.errorMsg) {
          this.$store.commit('setErrorMsg', '')
        }
      },
      deep: true
    }
  },
  components: {
    PulseLoader
  }
}
</script>

<style lang="scss">
@import "@/styles/components/_contactMe.scss";
</style>
