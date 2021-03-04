<template>
  <div>
    <ul>
      <li>
        <router-link
                :to="{'name' : 'home'}"
        >
          Home
        </router-link>
      </li>
      <template v-if="authenticated">
        <li>
          <router-link
                  :to="{'name' : 'dashboard'}"
          >
            Dashboard
          </router-link>
        </li>
        <li>
          {{user.name}}
        </li>
        <li @click.prevent="logout">
          <a href="">LogOut</a>
        </li>
      </template>
      <template v-else>
        <li>
          <router-link
                  :to="{'name' : 'login'}"
          >
            Login
          </router-link>
        </li>
      </template>

    </ul>
  </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "NavigationComponent",
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user',
            })
        },
        methods: {
            ...mapActions({
                signOut: 'auth/logout'
            }),
            logout() {
                this.signOut().then(() => {
                    this.$router.replace({
                        'name': 'login'
                    })
                })
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>
