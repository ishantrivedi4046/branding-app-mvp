export enum InfluencerBasicInfoKeys {
  MOBILE = 'mobile',
  EMAIL = 'email',
  BIO = 'bio',
  INSTAGRAM = 'instagram',
  TIKTOK = 'tiktok',
}

export const InfluencerAllInfoKeys: Array<InfluencerBasicInfoKeys> = [
  InfluencerBasicInfoKeys.MOBILE,
  InfluencerBasicInfoKeys.EMAIL,
  InfluencerBasicInfoKeys.INSTAGRAM,
  InfluencerBasicInfoKeys.TIKTOK,
];

export const InfluencerBasicInfoKeysToLabelMap: Record<
  InfluencerBasicInfoKeys,
  string
> = {
  [InfluencerBasicInfoKeys.MOBILE]: 'Mobile',
  [InfluencerBasicInfoKeys.EMAIL]: 'Email',
  [InfluencerBasicInfoKeys.INSTAGRAM]: 'Instagram',
  [InfluencerBasicInfoKeys.TIKTOK]: 'Tiktok',
  [InfluencerBasicInfoKeys.BIO]: 'Bio',
};

export enum InfluencerMethods {
  GET_ALL_INFLUENCERS = 'getAllInfluencer',
  UPDATE_INFLUENCER_STATUS = 'updateInfluencerStatus',
  REGISTER_INFLUENCER = 'signup',
}
