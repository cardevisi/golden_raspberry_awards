export interface TableListProps {
  data: any;
  onPress: (item: any) => void;
  label: string;
  isLoading: boolean;
  onChangeYearTextInput: (value: string) => void;
  onChangeWinnerTextInput: (value: string) => void;
}
