<template>
  <div>
    <form @submit.prevent="submit()">
      <div>
        <label for="email">Eamil</label>
        <input type="text" name="email" id="email" v-model="form.email">
      </div>
      <div>
        <label for="password">Password</label>
        <input autocomplete="" type="password" name="password" id="password" v-model="form.password">
      </div>
      <div>
        <input type="button" value="Submit" @click="submit">
      </div>
    </form>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "LoginComponent",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions({
                login: 'auth/login'
            }),
            submit() {
                this.login(this.form).then(() => {
                    this.$router.replace({
                        name: 'dashboard'
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>
