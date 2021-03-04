<template>
  <div id="app">
    <NavigationComponent></NavigationComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationComponent from "./components/NavigationComponent"

export default {
  name: 'App',
  components: {
      NavigationComponent
  }
}
</script>

