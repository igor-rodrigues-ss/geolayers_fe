import { useContext } from "react";
import MapContext from './Map/MapContext';
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


const ZoomIn = () => {
  const { map } = useContext(MapContext);

  function zoomIn() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom + 1);
  }

  return (
    <ZoomInButton onClick={ () => zoomIn() }>
      +
    </ZoomInButton>
  );
}

const ZoomOut = () => {
  const { map } = useContext(MapContext);

  function zoomOut() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom - 1);
  }

  return (
    <ZoomOutButton onClick={ () => zoomOut() }>
      -
    </ZoomOutButton>
  );
}

export {ZoomIn, ZoomOut}