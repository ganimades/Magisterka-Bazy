<template>
  <div id="app">
    <div class="main-container">
      <div class="header-container">
        <h1>
          Todo List
        </h1>
        <TaskCreator/>

        <div class="info-bar">
          <div
            id="task-count"
            class="task-count"
          >
            {{tasks.length}} tasks
          </div>
          <div class="list-types">
            <i
              class="fa fa-th-list list-type"
              title="List"
              :class="{selected: listType === 'list'}"
              @click="setListType('list')"
            ></i>
            <i
              class="fa fa-briefcase list-type"
              title="Nested List"
              :class="{selected: listType === 'nested-list'}"
              @click="setListType('nested-list')"
            ></i>
            <i
              class="fa fa-th list-type"
              title="Grid"
              :class="{selected: listType === 'grid'}"
              @click="setListType('grid')"
            ></i>
          </div>
        </div>
      </div>
      <TaskList
        class="list-container"
        v-if="listType === 'list'"
      />
      <TaskGrid
        class="grid-container"
        v-if="listType === 'grid'"
      />
      <TaskListNested
        class="list-container"
        v-if="listType === 'nested-list'"
      />
    </div>
    <Sidepanel/>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import TaskCreator from './components/task-creator/TaskCreator';
  import TaskList from './components/task-list/TaskList';
  import TaskGrid from './components/task-grid/TaskGrid';
  import TaskListNested from './components/task-list-nested/TaskListNested';
  import { TaskGenerator } from './services/task-generator';
  import Sidepanel from './components/sidepanel/Sidepanel';

  export default {
    name: 'app',
    components: {
      Sidepanel,
      TaskListNested,
      TaskGrid,
      TaskList,
      TaskCreator,
    },
    computed: {
      ...mapGetters([
        'tasks',
        'listType',
      ]),
    },
    methods: mapMutations([
      'setListType',
      'updateList'
    ]),
    created() {
      this.updateList(TaskGenerator.default())
    },
  };
</script>

<style>
  @import "../../shared/global-styles.css";
</style>
