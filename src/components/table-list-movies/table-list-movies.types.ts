export interface TableListProps {
  data: any;
  onPress: (item: any) => void;
  isLoading: boolean;
  onChangeYearTextInput: (value: string) => void;
  onChangeWinnerTextInput: (value: string) => void;
}
