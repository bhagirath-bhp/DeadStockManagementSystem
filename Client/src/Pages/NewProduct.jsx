import React from 'react';
import { useState } from 'react';
import { activeUser } from '../../App';
import { firestore } from '../../FireBase/utils';
import { v4 as uuid } from 'uuid';

export let jsTimestamp = new Date();
function NewProduct() {
    const [timeStamp, setTimestamp] = useState(new Date());
    const onSubmit = (e) => {
        e.preventDefault();
        console.log([e.target[0].value, e.target[1].value]);
        console.log(firestore.collection(activeUser.uid));
        let thisPid = uuid();
        firestore.collection("products").doc("productdata").set({
            productName: e.target[0].value,
            productId: thisPid,
            productQuantity: e.target[1].value,
            manufacturingDate: e.target[2].value,
            expiryDate: e.target[3].value,
            timeStamp: timeStamp
        })
    };
    return (
        <div>
            <div className="createTransaction" style={usingStyles.menu}>
                <form name='creatingTransaction' action="" onSubmit={onSubmit}>
                    <div className="productName">
                        <p>Product Name: </p>
                        <input name='productName' type="text" />
                    </div>
                    <div className="productQuantity">
                        <p>Product Quantity: </p>
                        <input name='productQuantity' type="number" />
                    </div>
                    <div className="mfgDate">
                        <p>Manufacturing Date: </p>
                        <input name='mfgDate' type="number" />
                    </div>
                    <div className="expDate">
                        <p>Expiry Date: </p>
                        <input name='expDate' type="number" />
                    </div>
                    <div className="submit-new-transaction">
                        <input type="submit" value='Add Transaction' onClick={onSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewProduct