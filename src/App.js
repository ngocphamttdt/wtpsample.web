import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { render } from "react-dom";
import ListProduct from './features/product/listProduct';
import Counter from './features/product/counter/Counter';
import { ProductForm } from './features/product/productForm';
import { ProductFormV2 } from './features/product/productFormV2';
import { EmployeeList } from './features/Employee/Employee';
import CountdownTimer from './features/Clock/CountdownTimer';
import { ParentComp } from './features/learn/classSample';
import { Container } from './features/context/Containter';
import { DebounceSearch } from './features/learn/DebounceSearch';
import { ParentMemo } from './features/memo/ParentMemo';
import CountdownTimerV2 from './features/Clock/CountdownTimerV2';
import { TestRender } from './features/learn/TestRender';

function App() {
  return (
    render(
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<ListProduct />}></Route> */}
          {/* <Route index  element={<ListProduct />} />  */}
          {/* <Route index  element={<CountdownTimerV2 />} />  */}
          <Route index  element={<TestRender />} /> 
          <Route path='create'  element={<ProductForm />} /> 
          <Route path='createv2'  element={<ProductFormV2 />} /> 
          <Route path='counter'  element={<Counter />} /> 
          <Route path='employee'  element={<EmployeeList />} /> 
          <Route path='countdown'  element={<CountdownTimer />} /> 
          
        </Routes>
      </BrowserRouter>,
      document.getElementById("root")
    )
  );
}

export default App;
