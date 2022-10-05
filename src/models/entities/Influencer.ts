import { StatusOptionKeys } from 'constants/components/admin-table/status.constant';
import { Entity, EntityIdentifier } from '../entity';

export type SocialNetworkDataType<T extends EntityIdentifier = string> = {
  [key: string]: T;
};
export interface InfluencerProfileKeys {
  interests?: Array<string>;
  portfolio?: Array<string>;
  instagram?: string;
  instagramFollowers?: number;
  tiktok?: string;
  tiktokFollowers?: number;
  bio?: string;
  website?: string;
  terms?: string;
  mobile?: string;
  status?: string;
  location?: string;
}
export interface Influencer extends Entity {
  influencerProfile: InfluencerProfileKeys;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  created: string;
  status: StatusOptionKeys;
}
