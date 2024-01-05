import { FormEvent, useState } from 'react'
import { TodoModule }          from '@/core/modules/todo/todo.module.ts'


export function TodoInput() {

    const [ todoText, setTodoText ] = useState( '' )

    function onTodoTextInput( event: FormEvent<HTMLInputElement> ) {
        setTodoText( ( event.target as HTMLInputElement ).value )
    }

    function onAddTodo() {
        if ( todoText.length ) {
            TodoModule.addTodo( todoText )
            setTodoText( '' )
        }
    }

    return (
        <div className="join w-full">

            <input value={ todoText }
                   onInput={ onTodoTextInput }
                   className="input input-bordered join-item w-full bg-white"
                   placeholder="What you got to do?"
                   type="text"
            />

            <button className="btn btn-primary join-item text-white" onClick={ onAddTodo }>
                Add
            </button>

        </div>
    )
}
