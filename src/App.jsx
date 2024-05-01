import { useSelector, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { decrement, increment } from "./redux/counterSlice";

const App = () => {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value);
  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttır</button>{" "}
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </div>
  );
};

export default App;
