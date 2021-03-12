// Material UI in React.js

import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import { Tooltip } from '@material-ui/core';

const App = () => {    
    const [count, setCount] = useState(0)    

    const inputEvent1 = () => {
        if (count==100) {
            alert("max value reached")
        }
        else{
        setCount(count+1); 
        }      
    };
    const inputEvent2 = () => {
        if (count==0) {
            alert("min value reached")
        }
        else{
        setCount(count-1); 
        }
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> {count} </h1>
                    <br />

                    <Tooltip title="Add">
                    <Button onClick={inputEvent1} className="btn_green" >
                     <AddIcon/> 
                    </Button>
                    </Tooltip>

                    <Tooltip title="Delete">
                    <Button onClick={inputEvent2} className="btn_red" >
                     <RemoveIcon/> 
                    </Button>   
                    </Tooltip>                
                </div>
            </div>
        </>
    )
}
export default App;


