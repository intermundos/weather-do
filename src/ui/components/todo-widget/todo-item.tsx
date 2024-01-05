import React    from 'react'
import { clsx } from 'clsx'

interface Props {
    todo: TTodo;
    toggleTodo: ( todoId: string ) => void;
    deleteTodo: ( todoId: string ) => void;
}

export function TodoItem( { todo, toggleTodo, deleteTodo }: Props ) {

    const isCompleted = todo.status === 'completed'

    function onDelete( event: React.MouseEvent, todoId: string ) {
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
        deleteTodo( todoId )
    }

    return (
        <li className="pl-3 pr-1 py-2 w-full flex items-center gap-5 text-wrap shadow bg-white rounded"
            onClick={ () => toggleTodo( todo.id ) }
        >

            <input type="checkbox"
                   checked={ isCompleted }
                   className="checkbox checkbox-xs"
                   onChange={ () => void 0 }
            />

            <div className="todo-body flex-grow cursor-pointer">
                <div className={ clsx( 'pl-0 leading-4 text-base font-light text', isCompleted && 'line-through' ) }>
                    { todo.text }
                </div>
            </div>

            <i className="delete-button text-red-500 p-1 cursor-pointer"
               onClick={ ( event ) => onDelete( event, todo.id ) }
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                    <path fill="currentColor"
                          d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"/>
                </svg>
            </i>

        </li>
    )
}
