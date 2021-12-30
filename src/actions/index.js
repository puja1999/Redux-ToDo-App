// defing all actions, for add, delete and removeAll todo list

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id:id
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
