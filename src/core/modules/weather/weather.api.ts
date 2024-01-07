const BASE_URL = 'https://nominatim.openstreetmap.org/reverse?'

export async function fetchUserLocation( coordinates: GeolocationPosition['coords'] ): Promise<TLocationResponse | null> {

    const searchParams = new URLSearchParams( {
        format: 'json',
        lat: coordinates.latitude.toString(),
        lon: coordinates.longitude.toString(),
    } )

    try {

        const response = await fetch( BASE_URL + searchParams.toString() )

        const result = await response.json()

        if ( result?.address?.city ) {
            return result?.address as TLocationResponse
        } else {
            return null
        }
    } catch ( error ) {
        console.log( 'Error', error )
        return null
    }
}
