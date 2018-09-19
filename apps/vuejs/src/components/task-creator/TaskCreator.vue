<template>
  <form
    @submit="taskName && createTask($event)"
  >
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="New task"
        v-model="taskName"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-primary"
          type="submit"
          :disabled="!taskName"
        >
          <i class="fa fa-plus"></i>
          Add
        </button>
      </div>
    </div>
  </form>

</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'TaskCreator',
    data: () => ({
      taskName: '',
    }),
    methods: {
      createTask($event) {
        $event.preventDefault();

        this.addTask({
          name: this.taskName,
          isDone: false,
        });

        this.taskName = '';
      },
      ...mapMutations([
        'addTask',
      ]),
    },
  };
</script>
