import { FormArray } from '@angular/forms';

export interface ResumeFormStructure {
    fullname: string;
    descriptionSentence: string;
    phone: string;
    personalLink: string;
    email: string;
    address: string;
    profilePicture: string;
    experiencesList: Array<any>;
    educationsList: Array<any>;
    languagesList: Array<any>;
    skillsList: Array<any>;
    hobbiesList: Array<any>;
}

export interface Education {
    educationTitle: string;
    startDate: string;
    endDate: string;
    workPlace: string;
    workAddress: string;
}

export interface Experience {
    experienceTitle: string;
    workPlace: string;
    workPlaceDescription: string;
    startDate: string;
    endDate: string;
    workAddress: string;
    items: FormArray;
}

export interface Header {
    fullname: string;
    descriptionSentence: string;
    phone: string;
    personalLink: string;
    email: string;
    address: string;
    profilePicture: string;
}

export interface Hobby {
    hobbyTitle: string;
    hobbyDescription: string;
}

export interface Language {
    languageTitle: string;
    languageLevel: string;
}

export interface Skill {
    skillCategoryTitle: string;
    items: FormArray;
}