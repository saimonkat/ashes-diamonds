import React, { Dispatch, RefObject, SetStateAction } from "react";
import { Pagination as AntPagination } from "antd";
import ImageWrapper from "@components/common/ImageWrapper";

import arrowSlide from "../../shared/icons/pricing/arrow-slide.svg";

export interface IPagination {
  totalCount: number;
  pageSize?: number;
  defaultCurrent?: number;
  current?: number;
  className?: string;
  disabled?: boolean;
  inBottom?: boolean;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  refOfMainBlock?: RefObject<HTMLDivElement>;
  offsetTop?: number;
  pathname: string;
}

const Pagination: React.FC<IPagination> = ({
  totalCount,
  defaultCurrent = 1,
  current,
  disabled = false,
  pageSize = 10,
  setCurrentPage,
  pathname,
}) => {
  const minTotalCount = pageSize;

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  const disablePreventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const itemRender = (
    page: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    element: React.ReactNode
  ) => {
    console.log(123, element);
    if (type === "prev") {
      return (
        <a
          href={
            ((current as number) - 1 > 0 &&
              `${pathname}?page=${(current as number) - 1}`) as string
          }
          onClick={disablePreventDefault}
        >
          <ImageWrapper src={arrowSlide} alt="arrow-slide" />
        </a>
      );
    }
    if (type === "next") {
      return (
        <a
          href={
            ((current as number) + 1 <= totalCount - pageSize &&
              `${pathname}?page=${(current as number) + 1}`) as string
          }
          onClick={disablePreventDefault}
        >
          <span>Next page</span>
          <ImageWrapper src={arrowSlide} alt="arrow-slide" />
        </a>
      );
    }
    return (
      <a
        onClick={disablePreventDefault}
        href={(page !== current && `${pathname}?page=${page}`) as string}
      >
        {element}
      </a>
    );
  };

  if (totalCount > minTotalCount) {
    return (
      <div>
        <AntPagination
          defaultCurrent={defaultCurrent}
          current={current}
          total={totalCount}
          pageSize={pageSize}
          onChange={(page: number) => onChange(page)}
          className="pagination_inner-wrapper"
          disabled={disabled}
          showTitle={false}
          responsive={false}
          showSizeChanger={false}
          showLessItems={false}
          showQuickJumper={false}
          itemRender={itemRender}
          jumpNextIcon={"..."}
          jumpPrevIcon={"..."}
        />
      </div>
    );
  }

  return <></>;
};

export default Pagination;
