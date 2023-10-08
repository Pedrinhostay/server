import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt"
export class UserControl {
    async create(req: Request, res: Response){

     const {name, email, password} = req.body

     const existingUser = await userRepository.findOneBy({email})

    if(existingUser){
         return res.status(400).json({message: "Usuario já cadastrado"})
      }

      const hashPassword = await bcrypt.hash(password, 10)

      const newUser = userRepository.create({
            name,
            email,
            password: hashPassword
        })

        await userRepository.save(newUser)

        const {password:psw, ...user} = newUser

        return res.status(201).json(user)
 }

}