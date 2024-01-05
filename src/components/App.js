import React, {useReducer} from 'react';
import reducer from '../reducers';
import './App.css';
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { initialState } from '../reducers';
import { changeOperation, clearMem, addMem, applyNumber, setMem, clearTotal} from '../actions';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const clickOp = (e) => {
    dispatch(changeOperation(e.target.value))
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => {dispatch(setMem(state.total))}} />
              <CalcButton
                value={"MR"}
                onClick={() => dispatch(addMem())} />
              <CalcButton
                value={"MC"}
                onClick={() => dispatch(clearMem())} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(e) => dispatch(applyNumber(e.target.value * 1))} />
              <CalcButton
                value={2}
                onClick={(e) => dispatch(applyNumber(e.target.value * 1))}/>
              <CalcButton
                value={3}
                onClick={(e) => dispatch(applyNumber(e.target.value * 1))}/>
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(e) => dispatch(applyNumber(e.target.value * 1))}/>
              <CalcButton
                value={5}
                onClick={(e) => dispatch(applyNumber(e.target.value * 1))}/>
              <CalcButton
                value={6}
                onClick={(e) => dispatch(applyNumber(e.target.value * 1))}/>
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(e) => dispatch(applyNumber(e.target.value * 1))}/>
              <CalcButton
                value={8}
                onClick={(e) => dispatch(applyNumber(e.target.value * 1))}/>
              <CalcButton
                value={9}
                onClick={(e) => dispatch(applyNumber(e.target.value * 1))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}
                onClick={clickOp} />
              <CalcButton value={"*"}
                onClick={clickOp}/>
              <CalcButton value={"-"}
                onClick={clickOp}/>
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch(clearTotal())} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
