import {render, screen} from '@testing-library/react-native';
import Pagination from './pagination';
import React from 'react';

describe('Pagination', () => {
  it('should render correctly', () => {
    render(
      <Pagination currentPage={1} onPageChange={() => {}} totalPages={1} />,
    );
    expect(screen.getByText('1').children[0]).toBe('1');
  });

  it('should render two pages', () => {
    render(
      <Pagination currentPage={1} onPageChange={() => {}} totalPages={2} />,
    );
    expect(screen.getByText('1').children[0]).toBe('1');
    expect(screen.getByText('2').children[0]).toBe('2');
  });

  it('should render three pages', () => {
    render(
      <Pagination currentPage={1} onPageChange={() => {}} totalPages={3} />,
    );
    expect(screen.getByText('1').children[0]).toBe('1');
    expect(screen.getByText('2').children[0]).toBe('2');
    expect(screen.getByText('3').children[0]).toBe('3');
  });

  it('should return the total number of pages when last button is clicked', () => {
    const onPageChange = jest.fn();
    const totalPages = 3;
    render(
      <Pagination
        currentPage={1}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />,
    );
    expect(screen.getByText('1').children[0]).toBe('1');
    expect(screen.getByText('2').children[0]).toBe('2');
    expect(screen.getByText('3').children[0]).toBe('3');

    const lastButton = screen.getByTestId('lastButton');

    lastButton?.props.onClick();

    expect(onPageChange).toHaveBeenCalledTimes(1);
    expect(onPageChange).toHaveBeenCalledWith(totalPages);
  });
});
