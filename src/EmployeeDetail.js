//var React = require('react');
import React from 'react';

class EmployeeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };

    this.loadEmployee = this.loadEmployee.bind(this);
  }

  loadEmployee() {
    return fetch(`/_api/employees/${this.state.id}`)
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          employee: responseJson.employee,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.loadEmployee();
  }

  render() {
    //{ name : name, val : 値},{name: department, val : 値}…を返す。
    const attributes_array = ["name", "department", "gender", "birth", "joined_date", "pay", "note"].map((attr) =>
      { return {
        name: attr,
        val: typeof this.state.employee[0] === "undefined" ? '...loading' : this.state.employee[0][attr].toString()
      } }
    );
    return (
      <dl>
        {attributes_array.reduce((accumulator, attr, idx) => {
          return accumulator.concat([
            <dt key={`attrname-${idx}`}>{attr.name}</dt>,
            <dd key={`attrval-${idx}`}>{attr.val}</dd>
          ]);
        },[])}
      </dl>
    );
  }
}

//module.exports = EmployeeDetail;
export default EmployeeDetail;