import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

//reactstrap amra suru te install kore nisilam etar kaj holo amke build in kisu component provide kore dawa
// reactstrap amra suru te install kore  nisilam etar kaj holo amke build in kisu component provide kore dawa 
// {} use kora hoise karon reactstrap thke egula default vabe import kora hoy nai egula normal vabe import kore hoise 

const Navigation = () => {

    return (

        <div>
            <Navbar dark color="dark">

                <div className="container">
                    <NavbarBrand href='/'> Bohubrihi Restaurant  </NavbarBrand>

                </div>


            </Navbar>
        </div>

    )


}

export default Navigation;