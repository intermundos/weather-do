import { useEffect }      from 'react'
import { useStore }       from '@nanostores/react'
import { WeatherModule }  from '@/core/modules/weather/weather.module.ts'
import { Widget }         from '@/ui/components/common/widget.tsx'
import { WeatherError }   from '@/ui/components/weather-widget/weather-error.tsx'
import { WeatherDisplay } from '@/ui/components/weather-widget/weather-display.tsx'

export function WeatherWidget() {

    const store = useStore( WeatherModule.store )

    useEffect( () => {
        WeatherModule.getCurrentGeoPosition().catch( console.error )
    }, [] )

    return (
        <Widget title="Weather now" loading={ store.loading }>

            <div className="content min-h-36 flex">

                {
                    store.error && (
                        <WeatherError/>
                    )
                }

                {
                    !store.loading && !store.error && (
                        <WeatherDisplay/>
                    )
                }
            </div>

        </Widget>
    )
}
