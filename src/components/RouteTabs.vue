<template>
  <uni-router shadow/>
  <uni-router-link activate params="custom=1"/>

  <uni-tabs>
    <uni-tab-bar mini>
      <uni-router-link params="custom=1">
        <uni-route params="custom=1" prop="active">
          <uni-tab value="Tab 1" icon="favorite" icon-type="two-tone" angle="270"></uni-tab>
        </uni-route>
      </uni-router-link>

      <uni-router-link params="custom=2">
        <uni-route params="custom=2" prop="active">
          <uni-tab only>
            <uni-tab-content>
              <uni-tab-icon icons="fa" type="brands" name="font-awesome"/>

              <uni-tab-text-label value="Tab 2"></uni-tab-text-label>

              <uni-route params="custom=2" prop="active">
                <uni-tab-indicator/>
              </uni-route>
            </uni-tab-content>

            <uni-tab-ripple></uni-tab-ripple>
          </uni-tab>
        </uni-route>
      </uni-router-link>
    </uni-tab-bar>

    <uni-route-display params="custom=1" hidden>
      Route Tab 1 Content
    </uni-route-display>

    <uni-route-display params="custom=2" hidden>
      Route Tab 2 Content
    </uni-route-display>
  </uni-tabs>
</template>

<script>
export default {
  name: "RouteTabs"
}
</script>

<style scoped>

</style>
