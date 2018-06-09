import React, {Component} from 'react';

export default function NewBillComponent(props){
    return(
        <div>
            <div>Bill Name</div>
            <div>Due Date</div>
            <div>Amount Due</div>
            <div>
                <button>Edit</button>
            </div>
            <div>
                <button>Pay Bill</button>
            </div>
            <div>
                <button>Delete</button>
            </div>
        </div>
    )
}