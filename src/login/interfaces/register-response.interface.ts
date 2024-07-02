export interface RegisterResponse {
  id: number;
  email: string;
  password: string;
  enabled: boolean;
  credentialsNonExpired: boolean;
  authorities: any[];
  username: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
}
