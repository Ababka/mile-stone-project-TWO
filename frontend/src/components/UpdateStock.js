// IMPORTS
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


// FUNCTIONAL COMPONENT
const UpdateStock = ({ stock }) => {
        // VANILLA JS SECTION

   // useState section:
   const [symbol, setSymbol] = useState(stock.symbol);
   const [stock_name, setStockName] = useState(stock.stock_name);
   const [price, setPrice] = useState(stock.price);

   const [show, setShow] = useState(false); // for modal


   // helper function section:

// modal helper functions:
const handleClose = () => setShow(false); // closing the modal
const handleShow = () => setShow(true); // opening the modal



  // fetch request for updating stock (PUT)
const updateStock = async (e) => {
  e.preventDefault();
  try {
    const body = { symbol, stock_name, price };
    await fetch(`http://localhost:3006/stocks/${stock.stock_id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    });

    console.log(body);

    window.location='/';

  } catch (err) {
    console.error(err.message);
  }
}




    // JSX SECTION
  return (
    <div>

      <button
        type="button"
        class="btn btn-outline-success btn-sm options"
        data-toggle="modal"
        data-target={`#id${stock.stock_id}`}
        onClick={handleShow}
      >
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Stock</Modal.Title>
        </Modal.Header>
            <div class="modal-body">
              <form>
                <div class="form-group row">
                  <label for="Symbol" class="col-sm-2 col-form-label" >Symbol</label>
                  <input 
                    type="text"
                    class="form-control form-control-sm"
                    id="Symbol"
                    placeholder="Symbol"
                    value={ symbol }
                    onChange={e => setSymbol(e.target.value)}
                  >
                  </input>
                </div> 
                <div class="form-group row">
                  <label for="Name" class="col-sm-2 col-form-label" >Name</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="Name"
                    placeholder="Name"
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
                    placeholder="Price"
                    value={ price }
                    onChange={e => setPrice(e.target.value)}
                  >
                  </input>
                </div>   
              </form>
            </div>
            <div class="modal-footer">
              <button
                  type="button"
                  class="btn btn-outline-success btn-sm"
                  data-dismiss="modal"
                  onClick={e => updateStock(e)}
              >
                      Edit
              </button>
            </div>
      </Modal>



    </div>
  )
}


export default UpdateStock;