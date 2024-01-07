import { map }               from 'nanostores'
import { fetchUserLocation } from '@/core/modules/weather/weather.api.ts'

const store = map<IWeatherStore>( {
    loading: true,
    error: false,
    location: undefined,
} )


async function getCurrentGeoPosition() {

    store.setKey( 'loading', true )

    if ( 'geolocation' in navigator ) {

        navigator.geolocation.getCurrentPosition(
            async ( position ) => {
                await getCurrentLocation( position )
            },
            ( error ) => {
                console.log( 'error getting current position', error )
                store.setKey( 'loading', false )
                store.setKey( 'error', true )
            },
            { timeout: 10000 }
        )

    } else {
        store.setKey( 'loading', false )
        store.setKey( 'error', true )
        console.log( 'Geolocation is not supported by your browser' )
    }
}

async function getCurrentLocation( position: GeolocationPosition ) {

    store.setKey( 'loading', true )

    const location = await fetchUserLocation( position.coords )

    if ( !location ) {
        store.setKey( 'error', true )
        store.setKey( 'loading', false )
        return
    }

    store.setKey( 'location', location )
    store.setKey( 'loading', false )
}

export const WeatherModule = {
    store,
    getCurrentGeoPosition,
}
