import React, { Component } from 'react';

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }  
    onDishselect(dishes) {
        this.setState(
            {
                selectedDish: dishes
            }
        );
    }
    renderdish(dishes)
    {
        if (dishes != null)
        {
            return (
            <div class="card" onClick={()=> this.onDishselect(dishes)} >
              <img src={dishes.image} class="align-self-start mr-3" alt={dishes.name} />
              <div class="card-body">
                    <h5 class="card-title">{dishes.name}</h5>
                    <p class="card-text">{dishes.description}</p>
            </div>
            </div>
            );
        }
        else
        {
            return <div></div>
            }
    }
    render() {
        const menu = this.props.dishes.map(dishes => {
            return (
                <div key={dishes.id} className="col-12 mt-5">
                    <div class="card" onClick={()=> this.onDishselect(dishes)} >
                      <img src={dishes.image} class="align-self-start mr-3" alt={dishes.name} />
                      <div class="card-body">
                            <h5 class="card-title">{dishes.name}</h5>
                            <p class="card-text">{dishes.description}</p>
                    </div>
                    </div>
                </div>
          
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="Media">
                       {menu}
                    </div>
                    <div className="row">
                       {this.renderdish(this.state.selectedDish)}
                    </div>

                </div>
            </div>
        );
    }
}

export default Menu;