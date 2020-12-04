import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import './Todo.css';
import React from 'react';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy dead line :clock:"></ListItemText>
            </ListItem>
        </List>
    )
}

export default Todo