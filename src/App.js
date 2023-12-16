import React from "react";

class Item extends React.Component {
  render(){
    return ( <li>
      {this.props.name}, ${this.props.price}
    </li> )
  }
}

class AddForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.props.add(name, price)
  }

  render() {
    return(
      <div>
        <input type="text" ref={this.nameRef} />
        <input type="number" ref={this.priceRef} />
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

class App extends React.Component {

  state = {
    items: [
      {id:1, name:'Apple', price:2.3},
      {id:2, name:'Orange', price:1.3},
    ]
  }


  add = (name,price) => {
    let id = this.state.items.length + 1;
    

    this.setState({
      items: [
        ...this.state.items,
        {id,name, price}
      ]
    })
  }
  render(){
    return (
      <div>
        <h3>List Of My Foods</h3>
      <AddForm add={this.add}/>
        <ul>
          {this.state.items.map( i => {
            return (
              <Item 
              key={i.id}
              name={i.name} 
              price={i.price}/>
              )
          })}
          

        </ul>
      </div>
    )
  }
}

export default App;