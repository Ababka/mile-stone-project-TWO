// IMPORTS
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// FUNCTIONAL COMPONENT
const AddNewStockModal = () => {
        // VANILLA JS SECTION
   // useState section:
   const [show, setShow] = useState(false); // for modal

    // data to add useState section
   const [symbol, setSymbol] = useState('');
   const [stock_name, setStockName] = useState('');
   const [price, setPrice] = useState('');


   // modal helper functons:
  const handleClose = () => setShow(false); // closing the modal
  const handleShow = () => setShow(true); // opening the modal

  
  // fetch request section:
  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      const body = { symbol, stock_name, price };
      const response = await fetch("http://localhost:3006/stocks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        console.log(response);

        window.location = '/'; // reloads the GET route for accessing the whole list of stocks from database. (/stocks)

      } catch (err) {
        console.error(err.message)
      }
    };
    


    // JSX SECTION
  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Add Stock
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header 
          closeButton>
          <Modal.Title>Add New Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group row">
              <label for="Symbol" class="col-sm-2 col-form-label" >Symbol</label>
              <input 
                type="text"
                class="form-control form-control-sm"
                id="Symbol"
                placeholder="Enter Ticker Symbol Here..."
                value={ symbol } // useState of ('') is used since nothing is typed in yet.
                onChange={e => setSymbol(e.target.value)} // sets the symbol useState to what is being typed in. (e = key press, target = input box, value = what gets typed in)
              >
              </input>
            </div>
            <div class="form-group row">
              <label for="Name" class="col-sm-2 col-form-label" >Name</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="Name"
                placeholder="Enter Stock Company Name Here..."
                value={ stock_name }
                onChange={e => setStockName(e.target.value)}
              >
              </input>
            </div>
            <div class="form-group row">
              <label for="Price" class="col-sm-2 col-form-label" >Price</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="Price"
                placeholder="Enter Current Stock Price Here..."
                value={ price }
                onChange={e => setPrice(e.target.value)}
              >
              </input>
            </div>  
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={onSubmitForm}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}


export default AddNewStockModal;