<template>
  <uni-store-set path="tab.store" state="1"/>

  <uni-tabs>
    <uni-tab-bar mini>
      <uni-event-store-set listen="click" path="tab.store" state="0">
        <uni-event-store-get path="tab.store" equal="0" prop="active">
          <uni-tab value="Tab 1" icon="favorite" icon-type="two-tone" angle="270"/>
        </uni-event-store-get>
      </uni-event-store-set>

      <uni-event-store-set listen="click" path="tab.store" state="1">
        <uni-tab only>
          <uni-tab-content>
            <uni-tab-icon icons="fa" type="brands" name="font-awesome"/>

            <uni-tab-text-label>Tab 2</uni-tab-text-label>

            <uni-event-store-get path="tab.store" equal="1" prop="active">
              <uni-tab-indicator/>
            </uni-event-store-get>
          </uni-tab-content>

          <uni-tab-ripple/>
        </uni-tab>
      </uni-event-store-set>
    </uni-tab-bar>

    <uni-store-display path="tab.store" equal="0" hidden>
      Store Tab 1 Content
    </uni-store-display>

    <uni-store-display path="tab.store" equal="1" hidden>
      Store Tab 2 Content
    </uni-store-display>
  </uni-tabs>
</template>

<script>
export default {
  name: "StoreTabs"
}
</script>

<style scoped>

</style>
