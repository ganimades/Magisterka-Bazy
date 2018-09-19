<template>
  <TaskNested
    :index="0"
  />
</template>

<script>
  import TaskNested from './TaskNested';

  export default {
    name: 'TaskListNested',
    components: {TaskNested},
  };
</script>

<style scoped>

</style>