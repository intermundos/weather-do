import { ReactNode }        from 'react'
import { LoadingIndicator } from '@/ui/components/common/loading-indicator.tsx'

export interface Props {
    children: ReactNode;
    title: string;
    loading?: boolean;
}

export function Widget( { children, title, loading }: Props ) {

    return (
        <article className="card card-compact bg-base-100 shadow-xl w-full">


            <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                <div className="card-content relative">
                    { loading && <LoadingIndicator/> }
                    { children }
                </div>
            </div>


        </article>
    )
}
