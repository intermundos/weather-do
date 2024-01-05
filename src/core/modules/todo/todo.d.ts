interface IStore extends Record<string, TTodo> {
}

type TTodoStatus = 'completed' | 'new'

type TTodo = {
    id: string;
    text: string;
    status: TTodoStatus;
    ts: number;
}
