import React from 'react';

export default class incomeEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card border-danger mb-3">
        <div className="card-header text-white bg-danger"> income Entries</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="income-description">Description</label>
              <input
                type="text"
                className="form-control"
                id="income-description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="income-amount">Amount</label>
              <div className="input-group">
                <span className="input-group">$</span>
                <input
                  type="text"
                  className="form-control"
                  id="income-amount"
                />
              </div>
            </div>
            <button type="button" className="btn btn-danger col-12 mb-5">
              {' '}
              + Add income
            </button>
            <table className="table table-sm table-hover">
              <thread>
                <tr>
                  <th>Description</th>
                  <th style={{ width: 120 }}>Amount</th>
                </tr>
              </thread>
              <tbody>
                <tr>
                  <td>Rent</td>
                  <td>$1,500.00</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
