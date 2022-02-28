// import React from 'react'
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 56.940746702432776,
//   lng: 24.074865658093447
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyDZtT7oZcYZUiU3stedUWap5YvmBMN6JGg"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         zoom={15}
//         center={center}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         <Marker position={{ 
//           lat: 56.940746702432776, 
//           lng: 24.074865658093447}} />
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '30rem',
  height: '30rem'
};

const center = {
  lat: 56.940746702432776, 
  lng: 24.074865658093447
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_NAME}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={{ 
           lat: 56.940746702432776, 
          lng: 24.074865658093447}} />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)