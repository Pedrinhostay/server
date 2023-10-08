import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
export class LoginControl {
    async login(req: Request, res: Response) {
        const { email, password } = req.body
    
        const account = await userRepository.findOneBy({ email })
    
        if (!account) {
            return res.status(400).json({message:'E-mail ou senha inválidos'})
        }
    
        const verificationPass = await bcrypt.compare(password, account.password)
    
        if (!verificationPass) {
            return res.status(400).json({message:'E-mail ou senha inválidos'})
        }
    
        const token = jwt.sign({ id: account.id }, process.env.JWT_PASS ?? '', {
            expiresIn: '8h',
        })
    
        const { password: _, ...userLogin } = account
    
        return res.json({
            user: userLogin,
            token: token,
        })
    }

    async getProfile(req: Request, res: Response) {

        return res.json(req.user)
    }
}