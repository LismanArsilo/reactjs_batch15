import React from "react";

export default function ChartFrom(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <div>
          <label>product Name : </label>
          <input
            type="text"
            placeholder="Product Name"
            onChange={props.handleChange("prodName")}
          />
        </div>

        <div>
          <label>Quantity : </label>
          <input
            type="number"
            placeholder="Quantity"
            onChange={props.handleChange("qty")}
          />
        </div>

        <div>
          <label>Salary : </label>
          <input
            type="text"
            placeholder="Salary"
            onChange={props.handleChange("salary")}
          />
        </div>

        <div>
          <label>Category : </label>
          <select onChange={props.selectOnChange}>
            <option>Choice Category</option>
            {props.Category.map((values, index) => (
              <option key={index}>{values}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
