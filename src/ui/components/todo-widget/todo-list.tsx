import { useStore }   from '@nanostores/react'
import { TodoModule } from '@/core/modules/todo/todo.module.ts'
import { TodoItem }   from '@/ui/components/todo-widget/todo-item.tsx'

export function TodoList() {

    const store = useStore( TodoModule.store )

    return (
        <>
            {
                !Object.keys( store ).length && (
                    <section className="text-center py-5">
                        Todo list is empty 🎉
                    </section>
                )
            }
            {
                Object.keys( store ).length > 0 && (
                    <ul className="bg-base-100 rounded-box flex flex-col gap-2 pb-5">
                        {
                            Object.keys( store ).map( ( todoId ) => {

                                return (
                                    <TodoItem key={ todoId }
                                              todo={ store[ todoId ] }
                                              toggleTodo={ TodoModule.toggleTodo }
                                              deleteTodo={ TodoModule.deleteTodo }
                                    />
                                )
                            } )
                        }
                    </ul>
                )
            }
        </>
    )
}
