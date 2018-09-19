<template>
  <div class="task-minimal">
    <label class="label">
      <input
        class="label__checkbox"
        type="checkbox"
        v-model="task.isDone"
      />
      <span class="label__text">
          <span class="label__check">
            <i class="fa fa-check icon"></i>
          </span>
        </span>
    </label>
  </div>

</template>

<script>
  export default {
    name: 'TaskMinimal',
    props: {
      task: Object
    }
  };
</script>

<style scoped>

</style>