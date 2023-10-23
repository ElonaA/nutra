import React from "react";

const AdminPanel = (props) => {
  return (
    <div className="admin_panel">
      <h1>Admin Panel</h1>

      <div className="card">
        <span className="title">Add new offer</span>
        <form className="form">
          <div className="group">
            <input placeholder="‎" type="text" required="" />
            <label for="name">Offer name</label>
          </div>
          <div className="group">
            <input
              placeholder="‎"
              type="text"
              id="geo"
              name="geo"
              required=""
            />
            <label for="geo">GEO</label>
          </div>
          <div className="group">
            <input
              placeholder="‎"
              type="text"
              id="price"
              name="price"
              required=""
            />
            <label for="price">Price</label>
          </div>
          <div className="group">
            <input
              placeholder="‎"
              type="text"
              id="flow"
              name="flow"
              required=""
            />
            <label for="flow">ID flow</label>
          </div>
          <div className="group">
            <textarea
              placeholder="‎"
              id="description"
              name="description"
              rows="5"
              required=""
            ></textarea>
            <label for="description">Description</label>
          </div>

          <label htmlFor="affiliate">Select аffiliate program</label>
          <select name="affiliate" id="affiliate">
            <option value="leadrock">LeadRock</option>
            <option value="leadbit">LeadBit</option>
            <option value="lemonad">LemonAD</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
