// import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { UsersService } from '../users/users.service';

// @Injectable()
// export class PermissionsGuard implements CanActivate {
//   constructor(private reflector: Reflector, private usersService: UsersService) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const requiredPermissions = this.reflector.get<string[]>('permissions', context.getHandler());
//     if (!requiredPermissions) {
//       return true;
//     }

//     const request = context.switchToHttp().getRequest();
//     const user = request.user;
//     const userPermissions = await this.usersService.getUserPermissions(user.id);

//     const hasPermission = requiredPermissions.every(permission =>
//       userPermissions.includes(permission)
//     );

//     if (!hasPermission) {
//       throw new ForbiddenException('Insufficient permissions');
//     }

//     return hasPermission;
//   }
// }
