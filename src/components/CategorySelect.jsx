import React, {useEffect,useContext} from 'react';
import {Grid } from 'semantic-ui-react';
import RadioButton from './RadioButton';
import {Context}  from '../context/Store';

const CategorySelect = () => {
    let categories = [
        "All","Entertainment","Income","Food","Fashion", "Gift","ATM","Transportation", "Housing","Misery"
    ]

    const [state, dispatch] = useContext(Context);

   const handleRadioClick = (event) =>{
        dispatch({type:"SET",key:"activeCategory", payload: event.target.value});
    }

    useEffect(()=>{
        if(typeof state.activeCategory === "undefined"){
            dispatch({type:"SET",key:"activeCategory", payload: "All"});
        }
    },[state.activeCategory])

    return (
        <Grid style={{"width":"100%","padding":"15px 0px"}}>
            {categories.map((item,index)=>{
                return(
                    <RadioButton key={index} cat={item} handleRadioClick={handleRadioClick}/>
                 
            )})}
        </Grid>
    )
}

export default CategorySelect;