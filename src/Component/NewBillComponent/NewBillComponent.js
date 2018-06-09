import React, {Component} from 'react';
import './NewBillComponent.css'

export default class NewBillComponent extends Component{
    constructor(props){
        super(props);

        this.state = {

            }

        }
    render(){
        return(
            <div className='new-bill-container'>
                <div className='bill-name-item'>
                    <input type="text" placeholder="New Bill Name"/>
                </div>
                <div className='due-date-item'>
                    <input type="text" placeholder="Due Date"/>
                </div>
                <div className='amount-due-item'>
                    <input type="text" placeholder="Amount Due"/>
                </div>
                <div className='edit-item'>
                    <button>Edit</button>
                </div>
                <div className='pay-item'>
                    <button>Pay Bill</button>
                </div>
                <div className='delete-item'>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}   