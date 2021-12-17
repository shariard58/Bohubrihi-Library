import React, { Component } from "react";
import DISHES from "../../Data/dishes";
import Menuitem from "./MenuItem";


class Menu extends Component {

    state = {

        dishes: DISHES
    }



    render() {

        const Menu = this.state.dishes.map(item => {
            return (

                <Menuitem dish={item} key={item.id} />
            );
        })
        return (


            <div className="container">

                <div className="row">

                    <div className="col-6">

                        {Menu}

                    </div>


                </div>
            </div>
        );
    }
}


export default Menu;
