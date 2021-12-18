import React from "react";




import {

    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardImgOverlay
} from "reactstrap";





const Menuitem = props => {

    console.log('Hello');

    console.log(props);
    return (

        <div>


            <Card>

                <CardBody>

                    <CardImg width="50%" alt={props.dish.name} src={props.dish.image}/>

                   




                    <CardImgOverlay>

                        <CardTitle>{props.dish.name}</CardTitle>

                    </CardImgOverlay>
                </CardBody>

            </Card>

        </div>

    );
}










export default Menuitem;

