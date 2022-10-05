export enum SignupFormLocationName {
  SYDNEY = 'Sydney',
  BRISBANE = 'Brisbane',
  MELBOURNE = 'Melbourne',
  ADELAIDE = 'Adelaide',
  DARWIN = 'Darwin',
  PERTH = 'Perth',
  CANBERRA = 'Canberra',
  HOBART = 'Hobart',
}

export enum SignupFormHobbyName {
  LIFESTYLE = 'Lifestyle',
  FASHION = 'Fashion',
  FITNESS = 'Fitness',
  TRAVEL = 'Travel',
  SEXUAL_HEALTH = 'Sexual Health',
  VLOGS = 'Vlogs',
  ART = 'Art',
  BEAUTY = 'Beauty',
  PARENTHOOD = 'Parenthood',
  FOOD = 'Food',
  PETS = 'Pets',
}

export enum SignupFormPurposeList {
  MONEY = 'Money',
  CONTRA = 'Contra',
  BOTH = 'Both',
}

export const SIGNUP_LOCATIO_NAME_ARRAY: Array<SignupFormLocationName> = [
  SignupFormLocationName.HOBART,
  SignupFormLocationName.BRISBANE,
  SignupFormLocationName.MELBOURNE,
  SignupFormLocationName.ADELAIDE,
  SignupFormLocationName.DARWIN,
  SignupFormLocationName.PERTH,
  SignupFormLocationName.CANBERRA,
  SignupFormLocationName.SYDNEY,
];

export const SIGNUP_FORM_HOBBY_NAME_ARRAY: Array<SignupFormHobbyName> = [
  SignupFormHobbyName.LIFESTYLE,
  SignupFormHobbyName.FASHION,
  SignupFormHobbyName.FITNESS,
  SignupFormHobbyName.TRAVEL,
  SignupFormHobbyName.SEXUAL_HEALTH,
  SignupFormHobbyName.VLOGS,
  SignupFormHobbyName.ART,
  SignupFormHobbyName.BEAUTY,
  SignupFormHobbyName.PARENTHOOD,
  SignupFormHobbyName.FOOD,
  SignupFormHobbyName.PETS,
];

export const SIGNUP_FORM_PURPOSE_ARRAY: Array<SignupFormPurposeList> = [
  SignupFormPurposeList.MONEY,
  SignupFormPurposeList.CONTRA,
  SignupFormPurposeList.BOTH,
];

export enum SignupSteps {
  STEP_1 = 1,
  STEP_2,
  STEP_3,
}

export const SIGNUP_FORM_ID = 'signup_form_id';
