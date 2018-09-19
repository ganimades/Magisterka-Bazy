<template>
  <div
    class="list-nested-micro-container"
    v-if="index < tasks.length"
  >
    <Task
      :task="tasks[index]"
      @taskDeleted="deleteTask"
    />

    <TaskNested
      :index="index + 1"
      v-if="index + 1 < tasks.length"
    />
  </div>

</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import Task from '../task-list/Task';

  export default {
    name: 'TaskNested',
    components: {Task},
    props: {
      index: Number
    },
    computed: {
      ...mapGetters([
        'tasks'
      ])
    },
    methods: {
      ...mapMutations([
        'deleteTask'
      ])
    }
  };
</script>

<style scoped>

</style>