import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface ApplicationPaginationProps {
  currentPage: number;
  pagesAmount: number;
  onChangePage(page: number): void;
}

export function ApplicationPagination({
  currentPage,
  onChangePage,
  pagesAmount,
}: ApplicationPaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {Boolean(currentPage !== 0) && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                onChangePage(currentPage - 1);
              }}
            />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink onClick={() => {}} isActive>
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        {pagesAmount && pagesAmount !== currentPage ? (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  onChangePage(pagesAmount);
                }}
                isActive
              >
                {pagesAmount + 1}
              </PaginationLink>
            </PaginationItem>
          </>
        ) : null}
        {Boolean(pagesAmount !== currentPage) && (
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                onChangePage(currentPage + 1);
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
