<template>
  <div class="sidepanel">
    <div class="closed">
      <div
        id="toggle-sidepanel"
        class="toggle-wrapper"
        @click="togglePanel()"
      >
        <i class="fa fa-bars"></i>
      </div>
    </div>
    <div
      class="opened"
      :class="{selected: isOpened}"
    >
      <div class="header">
        <h3 class="name">Configs</h3>
        <div
          class="toggle-wrapper"
          @click="togglePanel()"
        >
          <i class="fa fa-times"></i>
        </div>
      </div>

      <div class="body">
        <SidepanelBody/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import SidepanelBody from './SidepanelBody';

  export default {
    name: 'Sidepanel',
    components: {SidepanelBody},
    computed: {
      ...mapGetters([
        'isOpened'
      ])
    },
    methods: {
      ...mapMutations([
        'togglePanel'
      ])
    }
  };
</script>

<style scoped>

</style>