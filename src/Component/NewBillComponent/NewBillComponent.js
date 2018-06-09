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
                    <input type="text" placeholder="New Bill Name" align='center'/>
                </div>
                <div className='due-date-item'>
                    <input type="text" placeholder="Due Date"/>
                </div>
                <div className='amount-due-item'>
                    <input type="text" placeholder="Amount Due"/>
                </div>
                <div>
                    <h4>Link to payment site</h4>
                    <input type='url' placeholder='www.example.com'/>
                </div>
                <div className='add-item'>
                    <button>Add</button>
                </div>
                <div className='delete-item'>
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
}   