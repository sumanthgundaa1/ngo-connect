export interface INGOSummary {
  name: string;
  ngoDescription: string;
  supportNeeded: string;
  supportDescription: string;
  beneficiaries: string;
  locations: string[];
  skillsNeeded: string[];
  contactInformation: {
    email?: string;
    phone?: number | string;
  };
}
