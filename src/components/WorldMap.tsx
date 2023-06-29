import React, {FC} from "react";
import worldMapImg from "../images/world-map.png";

const WorldMap: FC<{ 
  onSelectCoords?: (lat: number, lon: number) => void 
}> = ({ onSelectCoords }) => {
  return (
    <div>
      <img src={worldMapImg} alt="World map" onClick={e => {
        onSelectCoords && onSelectCoords(e.clientX, e.clientY);
      }} />
    </div>
  );
}

export default WorldMap;
