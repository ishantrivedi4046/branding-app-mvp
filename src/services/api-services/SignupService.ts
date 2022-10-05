import { Influencer } from 'models/entities/Influencer';
import { baseApiService } from './BaseApiService';

class SignupService {
  static getInstance(): SignupService {
    return new SignupService();
  }

  async signup(data: Influencer) {
    return baseApiService.post('/accounts/register', data, {
      extras: { useAuth: false },
    });
  }
}

export const signupService = SignupService.getInstance();
