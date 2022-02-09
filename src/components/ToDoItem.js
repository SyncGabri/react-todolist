import React from "react";

import styles from "./ToDoItem.module.css";

class ToDoItem extends React.Component{

    render(){
            
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through"
        }

        const { id, completed, title } = this.props.todo;
        
        return(
            <li className={styles.item}>
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
            </li>
        );
    }
}

export default ToDoItem;