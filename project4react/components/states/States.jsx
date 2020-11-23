import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: window.cs142models.statesModel(),
      city: [],
      inputValue : '',
    };
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
  }

 
  handleChange(event){
    this.setState({inputValue: event.target.value })
  }

  handleSubmit(event){
    if(this.state.inputValue){
      let arr = [];
      arr = this.state.name.filter(names => names.toLowerCase().includes(this.state.inputValue))
      if(arr.length){
        this.setState({city: arr})
        console.log(this.state.city)
      }else{
        window.alert("Tanii haisan ug baihgui baina")
        window.location.reload(false);
      }
    }else{
      window.alert("Ta haih ugee oruulna uu")
      window.location.reload(false);
    }
    event.preventDefault();
}

  render() {
    return (
      <div className= "container">
        <form className="form" onSubmit={event => this.handleSubmit(event)}>
         
          <label htmlFor="hailt">
              Хайлт
          </label>
            <input className="inp" type="text" value={this.state.inputValue} placeholder = 'Хайх үг' onChange={(event) => this.handleChange(event)} />

          <input type="submit" value="Submit" className="sub"/>
        </form>
        <ul className='ul'>
          { 
          this.state.city.map(ner => 
            <li key={ner}>{ner}</li>
          )
          }
        </ul>
      </div>
    );
  };

}
export default States;
