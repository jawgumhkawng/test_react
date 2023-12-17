import React from "react";

class MyHeader extends React.Component {
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
        
}

}

export default MyHeader

