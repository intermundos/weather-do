import { useStore }   from '@nanostores/react'
import { TodoModule } from '@/core/modules/todo/todo.module.ts'

export function TodoListToolbar() {

    const store = useStore( TodoModule.store )

    return (
        <>
            <div className="divider divider-neutral divider-start mt-7">
                {
                    Object.keys( store ).length > 0 && (
                        <div className="flex gap-2">

                            <button className="btn btn-link text-blue-500 px-0"
                                    onClick={ TodoModule.completeAll }
                            >
                                Complete all
                            </button>

                            <button className="btn btn-link text-blue-500 px-0"
                                    onClick={ TodoModule.cleanCompleted }
                            >
                                Clean completed
                            </button>

                        </div>
                    )
                }
            </div>
        </>
    )
}
