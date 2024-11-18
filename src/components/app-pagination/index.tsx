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
}: ApplicationPaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              onChangePage(currentPage - 1);
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => {}} isActive>
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              onChangePage(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
