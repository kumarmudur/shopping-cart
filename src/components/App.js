import React from 'react';

import '../App.css';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            buyItems: [ 'milk', 'bread', 'fruit', 'snacks' ],
            message: ''
        }
    }

    addItem(e) {
        e.preventDefault();
        const { buyItems } = this.state;
        const newItem = this.newItem.value;
         
        if(newItem !== '') {
            const isOnTheList = buyItems.includes(newItem);
            if(isOnTheList) {
            this.setState({
                message: "This item is already on the list."
            }) 
            } else {
                this.setState({
                    buyItems: [ ...this.state.buyItems , newItem],
                    message: ''
                })
            }
        } else {
            this.setState({
                message: "Please enter the item to add."
            }) 
        }

        
        this.addForm.reset();
    }

    removeItem(item) {
        const newBuyItems = this.state.buyItems.filter(buyItem => {
            return buyItem !== item;
        })

        this.setState({
            buyItems: [...newBuyItems]
        })
    }

    clearItems() {
        this.setState({
            buyItems: []
        })
    }

    render() {
        const { buyItems, message } = this.state;
        return (
            <div>
                <header>
                  <img className="img img-circle img-lord" src={require("../images/shop.jpg")} height="150" alt="mahadeva"/>
                  <h1>Shopping List</h1>
                </header>

                <form ref={ input => this.addForm = input } className="form-inline" onSubmit={(e) => { this.addItem(e)}}>
                   <div className="form-group">
                        <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                        <input ref={ input => this.newItem = input } type="text" placeholder="bread" className="form-control" id="newItemInput"/>
                   </div>
                   <button type="submit" className="btn btn-primary">Add</button>
                   <button onClick={ (e) => this.clearItems()} type="button" className="btn btn-danger">Clear</button>
                </form>
                <div className="content">
                    {
                        message !== '' && <p className="message text-danger">{ message }</p>
                    }
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyItems.map(item => {
                                    return (
                                        <tr key={item}>
                                           <th scope="row">1</th>
                                           <td>{ item }</td>
                                           <td className="text-right">
                                             <button onClick={(e) => this.removeItem(item) } type="button" className="btn btn-default btn-sm">
                                               Remove
                                             </button>
                                           </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

