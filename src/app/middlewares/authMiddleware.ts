import { NextFunction, Request, Response } from "express";
import { userRepository } from "../../repositories/userRepository";
import jwt from "jsonwebtoken";


interface Payload {
    id: number
}

async function authMiddleware (req: Request, res: Response, next: NextFunction){
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({message:"Não autorizado"})
    }

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as Payload

    const userID = await userRepository.findOneBy({ id })

    if (!userID) {
        return res.status(401).json({message:'Não autorizado'})
    }
    
    const {password: _, ...authorized} = userID

    req.user = authorized

    next()
}

export default authMiddleware