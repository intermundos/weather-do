import { map } from 'nanostores'

const store = map<IWeatherStore>( {
    loading: true,
    error: false,
} )


async function getCurrentGeoPosition() {

    store.setKey( 'loading', true )

    if ( 'geolocation' in navigator ) {

        navigator.geolocation.getCurrentPosition(
            ( position ) => {
                store.setKey( 'position', position )
                store.setKey( 'loading', false )
            },
            ( error ) => {
                console.log( 'error getting current position', error )
                store.setKey( 'loading', false )
                store.setKey( 'error', true )
            },
            { timeout: 10000 }
        )

    } else {
        console.log( 'Geolocation is not supported by your browser' )
    }


}

export const WeatherModule = {
    store,
    getCurrentGeoPosition,
}
