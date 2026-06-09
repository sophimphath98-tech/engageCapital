export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface PillarItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  name: string;
  desc: string;
  details: string[];
  caseStudy: string;
}

export interface FactItem {
  id: string;
  icon: string;
  title: string;
  body: string;
}

export interface TeamMember {
  id: string;
  icon: string;
  name: string;
  role: string;
  bio: string;
}

export interface InquiryFormInput {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  loanType: string;
  loanAmountRange: string;
  employmentStatus: string;
  message: string;
}
