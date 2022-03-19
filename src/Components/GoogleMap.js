import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "24rem",
  height: "24rem",
}

const center = {
  lat: 56.940746702432776,
  lng: 24.074865658093447,
}

function googleMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker
          position={{
            lat: 56.940746702432776,
            lng: 24.074865658093447,
          }}
        />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(googleMap)
