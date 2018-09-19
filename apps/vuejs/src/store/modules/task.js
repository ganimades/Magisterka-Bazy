let counter = 0;

export default {
  state: {
    tasks: [],
  },
  getters: {
    tasks: state => state.tasks
  },
  mutations: {
    addTask(state, task) {
      task.id = ++counter;
      state.tasks.push(task);
    },
    deleteTask(state, taskId) {
      const index = state.tasks.findIndex(value => value.id === taskId);
      state.tasks.splice(index, 1)
    },
    updateList(state, tasks) {
      tasks.forEach(task => {
        task.id = ++counter
      });
      state.tasks = tasks
    },
    clearAll(state) {
      state.tasks = []
    }
  },
  actions: {},
};