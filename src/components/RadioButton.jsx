import React, {useContext} from 'react';
import {Context}  from '../context/Store';

const RadioButton = (props) => {
    const [state, dispatch] = useContext(Context);
    return (
        <div>
            <input
                value={props.cat}
                name="category"
                type="radio"
                checked={state.activeCategory === props.cat}
                onChange={(event) => props.handleRadioClick(event)}
            /> {props.cat}
        </div>
    )
}

export default RadioButton;