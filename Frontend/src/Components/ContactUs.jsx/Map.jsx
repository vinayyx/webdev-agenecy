import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <div className="md:px-16 px-6" >
      <div className="w-full h-[400px] rounded-lg overflow-hidden">
        <MapContainer
          center={[22.760511, 75.900253]}
          zoom={13}
          className="w-full h-full" // 
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[22.760511, 75.900253]}>
            <Popup className="font-bold text-[#D0FF71] " >Xyntech</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
