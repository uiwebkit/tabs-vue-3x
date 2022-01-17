<template>
  <uni-event-load url="tabs.json" prop="value">
    <uni-tabs pro color="success">
      <uni-template hidden>
        <div>
          <img alt="Vue logo" src="./assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>

        <div>
          <StoreTabs/>
          <RouteTabs/>
        </div>
      </uni-template>
    </uni-tabs>
  </uni-event-load>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import StoreTabs from "@/components/StoreTabs";
import RouteTabs from "@/components/RouteTabs";

export default {
  name: 'App',
  components: {
    HelloWorld,
    RouteTabs,
    StoreTabs,
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
}
</style>
