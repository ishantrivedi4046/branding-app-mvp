import { Entity } from '../entity';

export interface User extends Entity {
  email: string;
  firstName: string;
  id: string;
  isVerified: boolean;
  jwtToken: string;
  lastName: string;
  role: string;
}
