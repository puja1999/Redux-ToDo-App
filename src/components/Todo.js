import { useState } from "react";
import "../components/todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAll } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  return (
    <div>
      <div className="App">
        <div className="main-div">
          <div className="child-div">
            <h1>Add Your List Here</h1>
            <div className="addItems">
              <input
                type="text"
                placeholder="✍ Add Items..."
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              <button
                onClick={() => dispatch(addTodo(inputData), setInputData(""))}
              >
                Add
              </button>
            </div>

            <div className="showItems">
              {list.map((elem) => {
                return (
                  <div className="eachIem">
                    <li>
                      {elem.data}

                      <i
                        className="fas fa-trash-alt add-btn"
                        title="Delete Item"
                        onClick={() => dispatch(deleteTodo(elem.id))}
                      ></i>
                    </li>
                  </div>
                );
              })}
              <button onClick={() => dispatch(removeAll())}>Remove All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
