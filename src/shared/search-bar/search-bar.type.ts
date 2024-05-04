export type SearchBarProps = {
  searchPhrase: string;
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
  showSearchButtonClick?: boolean;
  onSearchButtonClick?: (searchPhrase: string) => void;
  maxLength?: number;
  inputMode?: InputModeOptions;
  placeholder?: string;
};
export type InputModeOptions =
  | 'none'
  | 'search'
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'email'
  | 'url';
