<template>
  <div class="sidepanel-body">
    <div class="section">
      <div class="name">
        Layout
      </div>
      <SidepanelItem
        clickId="layout-list"
        label="List"
        @action="setListType('list')"
      ></SidepanelItem>
      <SidepanelItem
        clickId="layout-nested-list"
        label="Nested List"
        @action="setListType('nested-list')"
      ></SidepanelItem>
      <SidepanelItem
        clickId="layout-grid"
        label="Grid"
        @action="setListType('grid')"
      ></SidepanelItem>
    </div>

    <div class="section">
      <div class="name">
        Utils
      </div>
      <SidepanelItem
        clickId="utils-clearAll"
        label="Clear All"
        @action="clearAll()"
      ></SidepanelItem>
    </div>

    <div class="section">
      <div class="name">
        Generators
      </div>
      <SidepanelItem
        clickId="gen-default"
        label="Default"
        @action="genDefault()"
      ></SidepanelItem>
      <SidepanelItem
        clickId="gen-random100"
        label="Random 100"
        @action="genRandom100()"
      ></SidepanelItem>
      <SidepanelItem
        clickId="gen-random500"
        label="Random 500"
        @action="genRandom500()"
      ></SidepanelItem>
      <SidepanelItem
        clickId="gen-random1k"
        label="Random 1k"
        @action="genRandom1k()"
      ></SidepanelItem>
      <SidepanelItem
        clickId="gen-random5k"
        label="Random 5k"
        @action="genRandom5k()"
      ></SidepanelItem>
      <SidepanelItem
        clickId="gen-random10k"
        label="Random 10k"
        @action="genRandom10k()"
      ></SidepanelItem>
      <SidepanelItem
        clickId="gen-random20k"
        label="Random 20k"
        @action="genRandom20k()"
      ></SidepanelItem>
    </div>
  </div>

</template>

<script>
  import SidepanelItem from './SidepanelItem';
  import { mapMutations } from 'vuex';
  import { startMeasure } from '../../../../angular-nativescript-app/app/perf-measure';
  import { TaskGenerator } from '../../services/task-generator';

  export default {
    name: 'SidepanelBody',
    components: {SidepanelItem},
    methods: {
      ...mapMutations([
        'setListType',
        'updateList',
        'clearAll',
      ]),
      genDefault() {
        startMeasure('generate Default');
        this.updateList(TaskGenerator.default());
      },
      genRandom100() {
        startMeasure('generate Random 100');
        this.updateList(TaskGenerator.random100());
      },
      genRandom500() {
        startMeasure('generate Random 500');
        this.updateList(TaskGenerator.random500());
      },
      genRandom1k() {
        startMeasure('generate Random 1k');
        this.updateList(TaskGenerator.random1k());
      },
      genRandom5k() {
        startMeasure('generate Random 5k');
        this.updateList(TaskGenerator.random5k());
      },
      genRandom10k() {
        startMeasure('generate Random 10k');
        this.updateList(TaskGenerator.random10k());
      },
      genRandom20k() {
        startMeasure('generate Random 20k');
        this.updateList(TaskGenerator.random20k());
      },
    },
  };
</script>
