import React from "react";

class InputToDo extends React.Component{
    
    state = {
        title: ""
    };
    
    inptChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    btnSubmitHandler = (e) =>{
        e.preventDefault();
        
        if(this.state.title.trim()){
            this.props.addItemEventHandler(this.state.title);

            this.setState({
                title: ""
            })
        }
        else
            alert("Cannot add an item that is empty")
        

    }

    render(){
        return (
            <form className="form-container" onSubmit={this.btnSubmitHandler}>
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="Add Todo..." 
                    name="title"
                    value={this.state.title} 
                    onChange={this.inptChangeHandler}/>
                <button className="input-submit"> Submit </button>
            </form>
        );
    }
}

export default InputToDo;