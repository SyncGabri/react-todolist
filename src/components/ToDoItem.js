import React from "react";

import styles from "./ToDoItem.module.css";

class ToDoItem extends React.Component{

    state = {
        editMode: false
    }
    
    editItemEventHandler = () => {
        this.setState({
            editMode: true
        });
    }

    updateDone = (event) => {
        if(event.key === "Enter")
            this.setState({editMode: false})
    }


    componentWillUnmount(){
        console.log("cleaning an item...");
    }


    render(){
            
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through"
        }

        const { id, completed, title } = this.props.todo;
        
        let viewStyle = {};
        let editStyle = {};

        if(this.state.editMode)
            viewStyle.display = "none";
        else
            editStyle.display = "none";

        return(
            <li className={styles.item}>
                <div 
                    onDoubleClick={this.editItemEventHandler}
                    style={viewStyle}
                    >
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={completed}
                        onChange={() => this.props.changeEventHandler(id)}
                    />
                    <button
                        onClick={() => this.props.delItemEventHandler(id)}>
                        Delete
                    </button>
                    <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                </div>
                <input 
                    type="text" 
                    className={styles.textInput}
                    style={editStyle}
                    value={title}
                    onChange={(e) => this.props.updateItemEventHandler(e.target.value, id)}
                    onKeyDown={this.updateDone}
                    />
            </li>
        );
    }
}

export default ToDoItem;