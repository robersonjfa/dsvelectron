import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const position = [-26.72389103156437, -53.5387206669143]

function MapWithPlaceholder() {
  return (
    <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Unoesc - São Miguel do Oeste
        </Popup>
      </Marker>
    </MapContainer>
  )
}

const MapaPage = () => {
  return (
    <>
      <MapWithPlaceholder />
    </>
  )
}

export default MapaPage
