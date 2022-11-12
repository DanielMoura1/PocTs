import {Request,Response} from 'express'
import { string } from '../../node_modules/joi/lib/index.js';
import { PaisScrema } from '../schemas/paisSchema.js';
import * as service from '../services/service.js';
import {pais} from '../protocols/votos.js'

export async function  Votar(req: Request, res: Response) {
   
    const time:pais = req.body;
    const {error}=PaisScrema.validate(time)
    if(error){
        return res.status(400).send({
            message: error.message
        })
    }
    try{
        await service.Votar(time.time)
        res.send('Voto contabilizado com sucesso')
    }catch (error) {
        res.status(500).send(error)
    }
 }

 export async function  pegar(req: Request, res: Response) {
    try{
        const resposta= await service.Pegar()
        res.send(resposta.rows)
    } catch (error) {
        res.status(500).send(error)
    }
 }
 export async function  CriarTime(req: Request, res: Response) {
    const time:pais = req.body;
    const {error}=PaisScrema.validate(time)
    if(error){
        return res.status(400).send({
            message: error.message
        })
    }
    try{
        const resposta= await service.CriarTime(time.time)
        res.send('ok')
    } catch (error) {
        res.status(500).send(error)
    }
}
export async function  DeletarTime(req: Request, res: Response) {
    const time:pais = req.body;
    const {error}=PaisScrema.validate(time)
    if(error){
        return res.status(400).send({
            message: error.message
        })
    }
    try{
        await service.DeletarTime(time.time)
        res.send('Time Deletado com sucesso')
    } catch (error) {
        res.status(500).send(error)
    }
}