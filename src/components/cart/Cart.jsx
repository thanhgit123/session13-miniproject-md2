
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  
MDBCardHeader,
MDBListGroup,
MDBListGroupItem,


} from "mdb-react-ui-kit";

import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../action/action.js';

export default function Cart() {
const data = useSelector((store)=>store)
const ditpatch = useDispatch()

const down=(id)=>{
    ditpatch(action("down",id))
    
}
const up=(id)=>{
    ditpatch(action("up",id))
}

return (
<section className="h-100" style={{ backgroundColor: "#eee" }}>
    {data.map((item)=>{
        return <MDBContainer className="py-5 h-100" key={item.id}>
        <MDBRow className="justify-content-center align-items-center h-24">
          <MDBCol md="10">
            <MDBCard className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage className="rounded-3" fluid
                      src={item.image}
                      alt="Cotton T-shirt" />
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3">
                    <p className="lead fw-normal mb-2">{item.name}</p>
                    <p>
                      <span className="text-muted">Size: </span>M{" "}
                      <span className="text-muted">Color: </span>Grey
                    </p>
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="2"
                    className="d-flex align-items-center justify-content-around">
                    <MDBBtn color="link" className="px-2" onClick={()=>down(item.id)}>
                      <MDBIcon fas icon="minus"  />
                    </MDBBtn>
    
                    <p>{item.quantity}</p>
        
                    <MDBBtn color="link" className="px-2" onClick={()=>up(item.id)}>
                      <MDBIcon fas icon="plus" />
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                    <MDBTypography tag="h5" className="mb-0"> $ 
                      {item.price * item.quantity}
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="1" lg="1" xl="1" className="text-end">
                    <a href="#!" className="text-danger">
                      <MDBIcon fas icon="trash text-danger" size="lg" />
                    </a>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

        {/* <MDBCardHeader>
            <MDBTypography tag="h5" className="mb-0">
              Summary
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBListGroup flush>
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </MDBListGroupItem>
              <MDBListGroupItem
                className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>$53.98</strong>
                </span>
              </MDBListGroupItem>
            </MDBListGroup>

            <MDBBtn block size="lg">
              Go to checkout
            </MDBBtn>
          </MDBCardBody> */}
      </MDBContainer>
        

    })}

        <div>Tính tiền :{} </div>
  
</section>
);
}
