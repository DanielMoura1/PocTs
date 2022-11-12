import { QueryResult } from 'pg';
import db from '../database.js';
import {time} from '../protocols/votos.js'

export async function verificarNome(time:string):Promise<QueryResult<time>> {
    return await db.query('SELECT * FROM votos WHERE nome = $1', [time])

}
export async function Votar(time:string,n:number) {
    await db.query('UPDATE votos SET votos=$1 WHERE nome = $2;', [n+1,time])
}

export async function Pegar():Promise<QueryResult<time>> {
    return await db.query('SELECT * FROM votos')
}
export async function Criar(time:string) {
    return await db.query('INSERT INTO votos (nome,votos) VALUES ($1,$2);',[time,0])
}
export async function Deletar(time:string) {
    return await db.query('DELETE FROM votos WHERE nome = $1;',[time])
}