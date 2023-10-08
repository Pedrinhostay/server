import { AppDataSource } from "../data-source";
import { Role } from "../entities/Roles";


export const RolesRepository = AppDataSource.getRepository(Role)