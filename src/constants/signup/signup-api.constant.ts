export enum SignupApiKeys {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PASSWORD = 'password',
  INFLUENCER_PROFILE = 'influencerProfile',
}

export enum InfluencerProfileApiKeys {
  INSTAGRAM = 'instagram',
  INSTAGRAM_FOLLOWERS = 'instagramFollowers',
  TIKTOK = 'tiktok',
  TIKTOK_FOLLOWERS = 'tiktokFollowers',
  BIO = 'bio',
  WEBSITE = 'website',
  PORTFOLIO = 'portfolio',
  INTERESTS = 'interests',
  TERMS = 'terms',
  LOCATION = 'location',
  MOBILE = 'mobile',
}

export const INFLUENCER_PROFILE_API_KEYS_ARRAY: Array<InfluencerProfileApiKeys> =
  [
    InfluencerProfileApiKeys.BIO,
    InfluencerProfileApiKeys.INSTAGRAM,
    InfluencerProfileApiKeys.INSTAGRAM_FOLLOWERS,
    InfluencerProfileApiKeys.INTERESTS,
    InfluencerProfileApiKeys.PORTFOLIO,
    InfluencerProfileApiKeys.TIKTOK,
    InfluencerProfileApiKeys.LOCATION,
    InfluencerProfileApiKeys.MOBILE,
    InfluencerProfileApiKeys.TIKTOK_FOLLOWERS,
    InfluencerProfileApiKeys.WEBSITE,
    InfluencerProfileApiKeys.TERMS,
  ];
