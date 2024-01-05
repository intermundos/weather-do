import { WeatherWidget } from '@/ui/components/weather-widget/weather.widget.tsx'
import { TodoWidget }    from '@/ui/components/todo-widget/todo.widget.tsx'

function App() {

    return (
        <section className="p-5 flex gap-5 flex-col bg-gray-800 min-h-full md:items-center">

            <div className="md:w-1/2 xl:w-1/3 flex flex-col gap-5">
                <WeatherWidget/>
                <TodoWidget/>
            </div>

        </section>
    )
}

export default App
