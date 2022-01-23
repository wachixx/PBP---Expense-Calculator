import React, {useEffect,useContext} from 'react';
import {Table } from 'semantic-ui-react';
import CategorySelect from './CategorySelect';
import {Context}  from '../context/Store';
import TableRow from './TableRow';

const TransactionsContainer = () => {

    const [state, dispatch] = useContext(Context);

    const fetchData = () => {
        fetch('sample_data.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        ).then(function(response){
            return response.json();
        }).then(function(data) {
            let newdata =  data //state.transactions.concat(data);
            if(state.activeCategory !== "All"){
                newdata = newdata.filter(a => a.category === state.activeCategory);
            }
            dispatch({type:"SET",key:"transactions", payload: newdata});
        });
    }

    useEffect(()=>{
       fetchData()
    },[state.activeCategory])

    return (
        <div>
            <div className='ui center aligned segment violet inverted'>
               <h2>PBP Expense Calculator</h2>
            </div>
            <div>
               <CategorySelect/>
               <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Posted At</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>category</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    
                    <Table.Body>
                        {
                            state.transactions.map((item, index)=>{
                                return (
                                    <TableRow key={index} transaction={item}/>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
        </div> 
    );
};

export default TransactionsContainer;