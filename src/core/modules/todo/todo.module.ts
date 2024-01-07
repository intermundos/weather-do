import { map }                    from 'nanostores'
import { UUIDTimeBasedGenerator } from '@/core/utils/uuid.ts'

const store = map<IStore>( {} )

export function addTodo( text: string ) {

    const todoId = UUIDTimeBasedGenerator()

    const todo: TTodo = {
        id: todoId,
        text: text,
        status: 'new',
        ts: Date.now()
    }

    store.setKey( todoId, todo )

}

function toggleTodo( todoId: TTodo['id'] ) {

    const todos = store.get()

    const todo = todos[ todoId ]

    todo.status = todo.status === 'new' ? 'completed' : 'new' as TTodoStatus

    store.set( { ...todos, [ todoId ]: todo } )
}

function deleteTodo( todoId: TTodo['id'] ) {

    const todos = store.get()

    Reflect.deleteProperty( todos, todoId )

    store.set( { ...todos } )
}

function cleanCompleted() {

    const todos = store.get()

    for ( const todoId in todos ) {
        if ( todos[ todoId ].status === 'completed' ) {
            Reflect.deleteProperty( todos, todoId )
        }
    }

    store.set( { ...todos } )
}

function completeAll() {

    const todos = store.get()

    for ( const todoId in todos ) {
        if ( todos[ todoId ].status === 'new' ) {
            todos[ todoId ].status = 'completed'
        }
    }

    store.set( { ...todos } )
}

export const TodoModule = {
    store,
    addTodo,
    toggleTodo,
    deleteTodo,
    cleanCompleted,
    completeAll,
}
