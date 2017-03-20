import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  get mockUserID(): string {
    return 'UID_001';
  }
}
