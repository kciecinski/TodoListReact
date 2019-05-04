import React from 'react';
import {
  MDBNavbar, MDBContainer, MDBCol, MDBNavbarBrand,
} from 'mdbreact';

export default function AppLayout(props) {
  return (
    <>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBContainer>
          <MDBCol size="6">
            <MDBNavbarBrand>
              <h1 style={{ fontSize: '45px', marginBottom: '0px' }}>Todo List</h1>
            </MDBNavbarBrand>
          </MDBCol>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer>
        <MDBCol style={{ marginTop: '15px' }}>
          {props.children}
        </MDBCol>
      </MDBContainer>
    </>
  );
}
