import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartForm from "../../form/ChartForm";
import { doGetCart, doAddCart } from "../Action";

export default function CartListRedux() {
  const dispatch = useDispatch;
  const carts = useSelector((state) => state.carts);
  const category = useSelector((state) => state.category);
  const totalHarga = useSelector((state) => state.totalHarga);
  const totalQty = useSelector((state) => state.totalQty);

  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    prodName: undefined,
    qty: 0,
    salary: 0,
    category: undefined,
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const payload = {
      prodId: Object.keys(carts).length + 1,
      prodName: values.prodName,
      qty: Number(values.qty),
      salary: values.salary,
      category: values.category,
    };
    dispatch(doAddCart(payload));
    setDisplay(false);
  };
  return (
    <div>
      <div>
        <h2>List Employee</h2>
        <button onClick={() => setDisplay(true)}> Add Product</button>
        {display ? (
          <ChartForm
            onSubmitForm={onSubmit}
            handleChange={handleChange}
            Category={category}
            setDisplay={setDisplay}
          />
        ) : (
          <>
            <table>
              <tbody>
                <tr>
                  <th>Prod Id</th>
                  <th>Prod Name</th>
                  <th>Qty</th>
                  <th>Salary</th>
                  <th>Category</th>
                  <th>SubTotal</th>
                </tr>
              </tbody>
              <tbody>
                {(carts || []).map((cart, index) => (
                  <tr key={cart.prodId}>
                    <td>{index + 1}</td>
                    <td>{cart.prodName}</td>
                    <td>{cart.qty}</td>
                    <td>{cart.salary}</td>
                    <td>{cart.category}</td>
                    <td>{cart.qty * cart.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Total Salary : Rp. {totalHarga}</h3>
            <h3>Total Quantity : Rp. {totalQty}</h3>
          </>
        )}
      </div>
    </div>
  );
}
