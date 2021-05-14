import { useContext } from "react";
import MapContext from '../Map/MapContext';
import { ZoomInButton, ZoomOutButton } from './styled';

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