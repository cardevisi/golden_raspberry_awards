import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './pagination.styles';

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  function PageButtonsComponents() {
    const pageButtons = [];

    // first page button
    pageButtons.push(
      <TouchableOpacity
        key="firstButton"
        style={[styles.pageButton]}
        onPress={() => onPageChange(1)}>
        <Text style={styles.pageText}>{'<<'}</Text>
      </TouchableOpacity>,
    );
    // navigation arrows
    if (currentPage > 1) {
      pageButtons.push(
        <TouchableOpacity
          key="prevButton"
          style={[styles.pageButton]}
          onPress={() => onPageChange(currentPage - 1)}>
          <Text style={styles.pageText}>{'<'}</Text>
        </TouchableOpacity>,
      );
    }

    const pageButtonsComponents = React.useMemo(
      () =>
        Array.from({length: totalPages}, (_, i) => i + 1).map(i => {
          const buttonStyle =
            i === currentPage ? {backgroundColor: 'blue'} : {};
          const pageNumber: string = i.toString() || '';
          return (
            <TouchableOpacity
              key={i}
              style={[styles.pageButton, buttonStyle]}
              onPress={() => onPageChange(i)}>
              <Text style={styles.pageText}>{pageNumber}</Text>
            </TouchableOpacity>
          );
        }),
      [],
    );
    pageButtons.push(...pageButtonsComponents);

    // navigation arrows
    if (currentPage < totalPages) {
      pageButtons.push(
        <TouchableOpacity
          key="nextButton"
          style={[styles.pageButton]}
          onPress={() => onPageChange(currentPage + 1)}>
          <Text style={styles.pageText}>{'>'}</Text>
        </TouchableOpacity>,
      );
    }
    // last page button
    pageButtons.push(
      <TouchableOpacity
        key="lastButton"
        testID="lastButton"
        style={[styles.pageButton]}
        onPress={() => onPageChange(totalPages)}>
        <Text style={styles.pageText}>{'>>'}</Text>
      </TouchableOpacity>,
    );

    return pageButtons;
  }

  return <View style={styles.container}>{PageButtonsComponents()}</View>;
};

export default Pagination;
