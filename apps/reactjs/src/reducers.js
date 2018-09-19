import {
  ADD_TASK,
  DELETE_TASK,
  SET_LIST_TYPE,
  TOGGLE_PANEL,
  UPDATE_LIST,
  UPDATE_TASK,
} from './actions';

const initialState = {
  listType: localStorage.getItem('react-listType') || 'list',
  tasks: [],
  isOpened: (() => {
    const storageValue = localStorage.getItem('react-isOpened');
    switch (storageValue) {
      case 'true':
        return true;
      case 'false':
      default:
        return false;
    }
  })(),
};

let taskIdCounter = 0;

export function reducers(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_TYPE:
      localStorage.setItem('react-listType', action.payload);
      return {
        ...state,
        listType: action.payload,
      };
    case ADD_TASK: {
      const tasks = [...state.tasks];
      const newTask = action.payload;
      newTask.id = ++taskIdCounter;
      tasks.push(newTask);
      return {
        ...state,
        tasks,
      };
    }
    case UPDATE_TASK: {
      const tasks = [...state.tasks];
      const index = tasks.findIndex(value => value.id === action.payload.id);
      tasks.splice(index, 1, action.payload);
      return {
        ...state,
        tasks,
      };
    }
    case DELETE_TASK: {
      const tasks = [...state.tasks];
      const taskId = action.payload;
      const index = tasks.findIndex(value => value.id === taskId);
      tasks.splice(index, 1);
      return {
        ...state,
        tasks,
      };
    }
    case UPDATE_LIST:
      const tasks = action.payload;
      tasks.forEach(task => {
        task.id = ++taskIdCounter;
      });
      return {
        ...state,
        tasks,
      };
    case TOGGLE_PANEL:
      localStorage.setItem('react-isOpened', String(!state.isOpened));
      return {
        ...state,
        isOpened: !state.isOpened,
      };
    default:
      return state;
  }
}