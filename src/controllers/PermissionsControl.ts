import { Request, Response } from "express";
import { PermissionRepository } from "../repositories/PermissionsRepository";


export class PermissionsControl {
    async create(request: Request, response: Response){
        

        const { name, description } = request.body;

        const existPermission = await PermissionRepository.findOneBy({name});

        if(existPermission) {
            return response.status(400).json({err: "A Role ja existe"});
        }

        const permission = PermissionRepository.create({
            name,
            description,
        });

        await PermissionRepository.save(permission);
        
        return response.json(permission);
    }
}