import {render, screen} from '@testing-library/react-native';
import Pagination from './pagination';
import React from 'react';

describe('Pagination', () => {
  it.skip('should render correctly', () => {
    render(
      <Pagination currentPage={1} onPageChange={() => {}} totalPages={1} />,
    );
    expect(screen.getByText('1')).toBe(1);
  });

  it.skip('should render two pages', () => {
    render(
      <Pagination currentPage={1} onPageChange={() => {}} totalPages={2} />,
    );
    expect(screen.getByText('1')).toBe(1);
    expect(screen.getByText('2')).toBe(2);
  });

  it.skip('should render three pages', () => {
    render(
      <Pagination currentPage={1} onPageChange={() => {}} totalPages={3} />,
    );
    expect(screen.getByText('1')).toBe(1);
    expect(screen.getByText('2')).toBe(2);
    expect(screen.getByText('3')).toBe(3);
  });

  it.skip('should return the clicked page', () => {
    const onPageChange = jest.fn();
    render(
      <Pagination
        currentPage={1}
        onPageChange={() => onPageChange}
        totalPages={3}
      />,
    );
    expect(screen.getByText('1')).toBe(1);
    expect(screen.getByText('2')).toBe(2);
    expect(screen.getByText('3')).toBe(3);

    screen.getByText('2').props.onPress();
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
