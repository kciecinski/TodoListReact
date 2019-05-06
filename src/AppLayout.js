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
              <h1 className="title">Todo List</h1>
            </MDBNavbarBrand>
          </MDBCol>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer>
        <MDBCol className="todo_list">
          {props.children}
        </MDBCol>
      </MDBContainer>
    </>
  );
}
