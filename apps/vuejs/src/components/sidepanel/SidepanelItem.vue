<template>
  <div class="item">
    <div class="key">
      {{label}}
    </div>
    <div class="value">
      <button
        :id="clickId || ''"
        class="btn btn-outline-secondary btn-sm"
        @click="$emit('action')"
      >
        Apply
      </button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'SidepanelItem',
    props: {
      clickId: String,
      label: String,
    }
  };
</script>

<style scoped>

</style>