import React from "react";
import "./NavBar.css"

class MyNav extends React.Component {
    render(){
      return(
        <div className="dark-nav">
          {this.props.children}
        </div>
      )
    }
  }

  export default MyNav;