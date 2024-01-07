import { useStore }      from '@nanostores/react'
import { WeatherModule } from '@/core/modules/weather/weather.module.ts'

export function WeatherDisplay() {

    const store = useStore( WeatherModule.store )
    
    return (
        <div className="weather-display w-full">

            <h2 className="text-center text-xl font-light mb-2">My location</h2>

            <div className="location flex gap-3 justify-center mb-6">
                <div>City: <b>{ store?.location ? store.location.city : 'N/A' }</b></div>
                <div>Country: <b>{ store.location ? store.location.country : 'N/A' }</b></div>
            </div>

            <div className="weather-icon flex justify-center gap-1">

                <span className="text-5xl font-semibold text-gray-600">
                    21
                    <sup>&deg;</sup>
                </span>

                <i className="text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"
                              d="M90.61 306.85A16.07 16.07 0 0 0 104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59c0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2c0-48.47 38.67-72.22 74.61-77.95Z"/>
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                              d="M384.8 271.4a80 80 0 1 0-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63m203.65-22.63l-22.63 22.63"/>
                    </svg>
                </i>
            </div>

        </div>
    )

}


// <div className="poisition stats shadow-md stats-vertical w-1/2">
//
//     <div className="stat">
//         <div className="stat-title flex items-center gap-1">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
//                 <path fill="currentColor"
//                       d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 2c3 0 5.5 1.6 6.9 4H5.1C6.5 5.6 9 4 12 4m0 16c-3 0-5.5-1.6-6.9-4h13.8c-1.4 2.4-3.9 4-6.9 4m-7.7-6c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h15.5c.2.6.3 1.3.3 2s-.1 1.4-.3 2z"/>
//             </svg>
//             Latitude
//         </div>
//         <div className="stat-value text-base">{ store.position?.coords.latitude }</div>
//     </div>
//
//     <div className="stat">
//         <div className="stat-title flex items-center gap-1">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
//                 <path fill="currentColor"
//                       d="M12 2a10 10 0 1 0 10 10A10.03 10.03 0 0 0 12 2M9.4 19.6a8.05 8.05 0 0 1 0-15.2A16.45 16.45 0 0 0 7.5 12a16.45 16.45 0 0 0 1.9 7.6m2.6.4a13.81 13.81 0 0 1-2.5-8A13.81 13.81 0 0 1 12 4a13.81 13.81 0 0 1 2.5 8a13.81 13.81 0 0 1-2.5 8m2.6-.4a16.15 16.15 0 0 0 0-15.2A8.03 8.03 0 0 1 20 12a7.9 7.9 0 0 1-5.4 7.6"/>
//             </svg>
//             Longitude
//         </div>
//         <div className="stat-value text-base">{ store.position?.coords.longitude }</div>
//     </div>
//
// </div>
//
// <div className="weather shadow-md flex-grow p-5 self-stretch">
//
//     <div className="text-center text-xl text-blue-500 mb-5">Windy</div>
//

//
// </div>
