import db from '../database.js';
import * as repositories from '../repositories/repositories.js';
import {time} from "../protocols/votos.js"


export async function Votar(time:string) {
  const res=await repositories.verificarNome(time)
  if(res.rows.length===0){
    throw  {
      type: "error_not_found",
      message: `time nao encontrado!`
    };
   
  }
  repositories.Votar(time,res.rows[0].votos)

}
export async function Pegar() {
    return  repositories.Pegar()
  
}
export async function CriarTime(time:string) {
  const res= await repositories.verificarNome(time)
  if(res.rows.length!==0){
    throw  {
      type: "error_not_found",
      message: `time já existe`
    }
  }
  repositories.Criar(time)
  
}
export async function DeletarTime(time:string) {
  const res= await repositories.verificarNome(time)
  if(res.rows.length===0){
    throw  {
      type: "error_not_found",
      message: `time nao existe`
    }
  }
  repositories.Deletar(time)
  
}