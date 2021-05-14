import styled from 'styled-components';


const ZoomInButton = styled.button`
  position: absolute;
  top: 15%;
  left: 95%;
  z-index: 1000;
  width: 35px;
  height: 35px;
  border: 1px solid darkgray;
  font-weight: bold;
  opacity: .8;
`;

const ZoomOutButton = styled.button`
  position: absolute;
  top: 22%;
  left: 95%;
  z-index: 1000;
  width: 35px;
  height: 35px;
  border: 1px solid darkgray;
  font-weight: bold;
  opacity: .8;
`;


export { ZoomInButton, ZoomOutButton }