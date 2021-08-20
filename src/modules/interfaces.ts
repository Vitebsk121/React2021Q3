export interface IInputValues {
  firstName: string;
  lastName: string;
  email: string;
  birthdayDate: string;
  country: string;
  offer?: boolean;
  agree?: boolean;
  avatarURL?: string;
}

export interface ISetFormValues {
  setFormValues: (props: IInputValues) => void;
}

export interface IAppState {
  formActive: string;
  formValues: IInputValues[];
}
