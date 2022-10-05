import { Influencer } from 'models/entities/Influencer';
import { InfluencerStatusUpadtePayloadType } from 'types/reducer/influencer/influencer.reducer.types';
import { baseApiService } from './BaseApiService';

class InfluencerApiService {
  static getInstance(): InfluencerApiService {
    return new InfluencerApiService();
  }

  async getAllInfluencer(): Promise<Influencer> {
    return baseApiService.get('/admin/get-influencers', {
      extras: { useAuth: true },
    });
  }

  async updateInfluencerStatus(
    data: InfluencerStatusUpadtePayloadType
  ): Promise<Influencer> {
    return baseApiService.post('/admin/update-influencer-status', data, {
      extras: { useAuth: true },
    });
  }
}

export const influencerApiService = InfluencerApiService.getInstance();
