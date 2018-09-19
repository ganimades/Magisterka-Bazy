<template>
  <div
    class="task"
    :class="{completed: task.isDone}"
  >
    <div class="body">
      <div class="is-done-wrapper">
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
      <span class="name">
      {{task.name}}
    </span>
      <div
        class="delete-wrapper"
        @click="deleteTask()"
      >
        <i class="fa fa-times"></i>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Task',
    props: {
      task: Object,
      taskDeleted: Function,
    },
    methods: {
      deleteTask() {
        this.$emit('taskDeleted', this.task.id);
      },
    },
  };
</script>
