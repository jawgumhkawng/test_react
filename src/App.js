import React from "react";
import MyNav from "./MyNav";
import MyHeader from "./MyHeader";
import "./cus/css/cus.css";

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
        <MyNav>
          <h2>NavBar Dark</h2>
        </MyNav>
        <MyHeader>
         <h3>Hello React</h3>
        </MyHeader>
        <h5 className="background">
          jaw gum hkawng <span>web developer</span>
        </h5>
        <p className="text">i'm jaw gumhkawng nagwjkhitfuoiygtoiuygpiudsa</p>
        <button className="btn">Click Me</button>
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