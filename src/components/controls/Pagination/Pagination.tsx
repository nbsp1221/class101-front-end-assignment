import React from 'react';
import classNames from 'classnames';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Pagination.scss';

interface Props {
  readonly totalCount: number;
  readonly countPerPage: number;
  readonly onPaginate: (pageNumber: number) => void;
}

const Pagination: React.FunctionComponent<Props> = (props) => {
  const {
    totalCount,
    countPerPage,
    onPaginate
  } = props;

  const [pageNumbers, setPageNumbers] = React.useState<number[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const pageNumbersCopy: number[] = [];
    const lastPageNumber = Math.ceil(totalCount / countPerPage);

    for (let i = 1; i <= lastPageNumber; i++) {
      pageNumbersCopy.push(i);
    }

    setPageNumbers(pageNumbersCopy);
  }, []);

  const onClickPrevious = React.useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPaginate(currentPage - 1);
    }
  }, [currentPage]);

  const onClickNext = React.useCallback(() => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      onPaginate(currentPage + 1);
    }
  }, [currentPage, pageNumbers]);

  return (
    <nav className="pagination">
      <div className={classNames('control', { active: currentPage > 1 })}>
        <button onClick={onClickPrevious}>
          <FaChevronLeft />
        </button>
      </div>
      <ul>
        {pageNumbers.map((pageNumber) =>
          <li
            className={classNames({ active: pageNumber === currentPage })}
            key={pageNumber}
          >
            <button>{pageNumber}</button>
          </li>
        )}
      </ul>
      <div className={classNames('control', { active: currentPage < pageNumbers.length })}>
        <button onClick={onClickNext}>
          <FaChevronRight />
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Pagination);