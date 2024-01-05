import { Widget }          from '@/ui/components/common/widget.tsx'
import { TodoInput }       from '@/ui/components/todo-widget/todo-input.tsx'
import { TodoList }        from '@/ui/components/todo-widget/todo-list.tsx'
import { TodoListToolbar } from '@/ui/components/todo-widget/todo-list-toolbar.tsx'


export function TodoWidget() {

    return (
        <Widget title="Todo now">

            <TodoInput/>

            <TodoListToolbar/>

            <TodoList/>

        </Widget>
    )
}
