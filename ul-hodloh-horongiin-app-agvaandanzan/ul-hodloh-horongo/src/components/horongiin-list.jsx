import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Horongo = props => (
  <tr>
    <td>{props.horongo.username}</td>
    <td>{props.horongo.description}</td>
    <td>{props.horongo.price}</td>
    <td>{props.horongo.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.horongo._id}>засах</Link> | <a href="#" onClick={() => { props.deleteHorongo(props.horongo._id) }}>устгах</a>
    </td>
  </tr>
)

export default class horongiinList extends Component {
  constructor(props) {
    super(props);

    this.deleteHorongo = this.deleteHorongo.bind(this)

    this.state = {horongos: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/horongo/')
      .then(response => {
        this.setState({ horongos: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteHorongo(id) {
    axios.delete('http://localhost:5000/horongo/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      horongos: this.state.horongos.filter(el => el._id !== id)
    })
  }

  horongiinList() {
    return this.state.horongos.map(current => {
      return <Horongo horongo={current} deleteHorongo={this.deleteHorongo} key={current._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Бүртгэгдсэн зарууд</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Зарын эзэн</th>
              <th>Тайлбар</th>
              <th>Үнэ</th>
              <th>Нийтэлсэн өдөр</th>
              <th>Засах</th>
            </tr>
          </thead>
          <tbody>
            { this.horongiinList() }
          </tbody>
        </table>
      </div>
    )
  }
}