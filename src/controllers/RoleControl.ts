import { Request, Response } from "express";
import { RolesRepository } from "../repositories/RolesRepository";
import { PermissionRepository } from "../repositories/PermissionsRepository";


export class RoleControl {
    async create(request: Request, response: Response){
        

        const { name, description, permissions } = request.body;

        const existRole = await RolesRepository.findOneBy({name});

        if(existRole) {
            return response.status(400).json({err: "A Role ja existe"});
        }

        const existPermission = await PermissionRepository.findBy(permissions.id)

        const roles = RolesRepository.create({
            name,
            description,
            permission: existPermission
        });

        await RolesRepository.save(roles);
        
        return response.json(roles);
    }
}