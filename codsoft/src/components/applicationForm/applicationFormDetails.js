import * as Yup from 'yup'

export const JobValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'), // Validation for last name
  dateOfBirth: Yup.date().required('Required'),
  gender: Yup.string().required('Required'),
  nationality: Yup.string().required('Required'),
  linkedIn: Yup.string().url('Invalid URL').required('Required'),
  portfolio: Yup.string().url('Invalid URL'),
  educationLevel: Yup.string().required('Required'),
  institutions: Yup.string().required('Required'),
  twitter: Yup.string().url('Invalid URL'),
  instagram: Yup.string().url('Invalid URL'),
  noticePeriod: Yup.string().required('Required'),
  startDate: Yup.string().required('Required'),
  whyInterested: Yup.string().required('Required'),
  fitForRole: Yup.string().required('Required'),
  salaryExpectations: Yup.string().required('Required'),
  // resume: Yup.mixed().required('Resume is required'),
  coverLetter: Yup.string().required('Cover Letter is required'),
})

export const initialValues = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gender: '',
  nationality: '',
  linkedIn: '',
  portfolio: '',
  educationLevel: '',
  institutions: '',
  twitter: '',
  instagram: '',
  noticePeriod: '',
  startDate: '',
  whyInterested: '',
  fitForRole: '',
  salaryExpectations: '',
  coverLetter: '',
}
