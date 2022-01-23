import React, {createContext, useReducer} from "react";              
import Reducer from './Reducer';
     
//used for initial testing
const initialState = { 
    transactions: [
    {
      id: 1,
      posted_at: '2017-02-28 11:00:00',
      description: 'Leather Pants, Gap co.',
      category: 'Fashion',
      amount: -20000
    },
    {
      id: 2,
      posted_at: '2017-02-29 10:30:00',
      description: "Paycheck from Bob's Burgers",
      category: 'Income',
      amount: 100000
    },
    {
      id: 3,
      posted_at: '2017-05-24 10:53:00',
      description:
        "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
      category: 'Entertainment',
      amount: -1498
    },
    {
      id: 4,
      posted_at: '2017-05-24 08:52:00',
      description: "Medium Iced Cold Brew, Gregory's Coffee",
      category: 'Food',
      amount: -365
    }
  ]
}
      
                                                                                                                             
export const Context = createContext(initialState);                                                                      
                                                                                
const Store = ({children}) => {    

    const [state, dispatch] = useReducer(Reducer, initialState); 
  
    return (                                                                    
        <Context.Provider value={[state, dispatch]}>                            
            {children}                                                          
        </Context.Provider>                                                     
    )                                                                           
};  

export default Store;