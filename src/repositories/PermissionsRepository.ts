import { AppDataSource } from "../data-source";
import { Permission } from "../entities/Permissions";

export const PermissionRepository = AppDataSource.getRepository(Permission)