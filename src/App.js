import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // console.log(AC);

  console.log(account);

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(5000)}>Deposit</button>
      <button onClick={() => withdrawMoney(2000)}>Withdraw</button>
    </div>
  );
}

export default App;
