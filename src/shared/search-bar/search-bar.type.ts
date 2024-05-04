export type SearchBarProps = {
  searchPhrase: string;
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  maxLength: number;
  keyboardType?: keyboardTypes;
  placeholder?: string;
};

export enum keyboardTypes {
  default = 'default',
  numeric = 'numeric',
  emailAddress = 'email-address',
  phonePad = 'phone-pad',
}
