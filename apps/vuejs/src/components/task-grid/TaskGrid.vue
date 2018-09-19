<template>
  <div>
    <TaskMinimal
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<script>
  import TaskMinimal from './TaskMinimal';
  import { mapGetters } from 'vuex';

  export default {
    name: 'TaskGrid',
    components: {TaskMinimal},
    computed: {
      ...mapGetters([
        'tasks',
      ]),
    },
  };
</script>

<style scoped>

</style>