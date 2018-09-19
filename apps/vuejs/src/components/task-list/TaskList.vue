<template>
  <div>
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @taskDeleted="onTaskDelete"
    />
  </div>
</template>

<script>
  import Task from './Task';
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'TaskList',
    components: {Task},
    computed: {
      ...mapGetters([
        'tasks'
      ])
    },
    methods: {
      onTaskDelete(taskId) {
        this.deleteTask(taskId)
      },
      ...mapMutations([
        'deleteTask'
      ])
    }
  };
</script>

<style scoped>

</style>