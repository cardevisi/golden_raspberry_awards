export interface TableListProps {
  data: any;
  onPress: (item: any) => void;
  label: string;
  isLoading: boolean;
  onPressSearchButton: (value: string) => void;
}
