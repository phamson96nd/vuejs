<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <div>
            <button @click="auth('facebook')">facebook</button>
            <button @click="auth('google')">google</button>
            <button @click="auth1('twitter')">twitter</button>
        </div>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        methods: {
            async auth(network) {
                const hello = this.hello;
                hello(network).login().then(async () => {
                    const authRes = hello(network).getAuthResponse();
                    console.log('11ps', authRes)
                    await this.axios.post("http://127.0.0.1:8000/api/checkuser", {token: authRes.access_token}).then((response) => {
                        console.log(response.data)
                    })

                    /*
                      performs operations using the token from authRes
                    */
                    hello(network).api('me').then(function (json) {
                        const profile = json;
                        console.log('333ps', profile)
                        /*
                          performs operations using the user info from profile
                        */
                    });
                })
            },
            auth1(network) {
                const hello = this.hello;
                hello.init({
                    twitter: '944OPRu0Y6d4dQFfc8FklCVKF'
                }, {
                    scope: 'email',
                    redirect_uri: 'https://192.168.1.141:8080/dashboard'
                });
                hello(network).login().then(() => {
                    const authRes = hello(network).getAuthResponse();
                    console.log('11ps', authRes)
                    /*
                      performs operations using the token from authRes
                    */
                    hello(network).api('me').then(function (json) {
                        const profile = json;
                        console.log('333ps', profile)
                        /*
                          performs operations using the user info from profile
                        */
                    });
                })
            }
        }

    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
