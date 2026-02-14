interface PaginationProps {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

export default function Pagination({
    currentPage,
    pageSize,
    totalCount,
    totalPages,
    onPageChange
}: PaginationProps) {

    // Encapsulate calculation logic
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalCount);

    return (
        <div className="bg-white p-6 flex justify-between items-center border-t">
            <div className="text-sm text-gray-500">
                Showing {startItem}-{endItem} of {totalCount} results
            </div>

            <div className="flex space-x-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className={`w-10 h-10 border rounded-full flex items-center justify-center transition ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-red-500 hover:text-red-500'}`}
                >
                    <i className="fas fa-chevron-left text-xs"></i>
                </button>

                <button className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center">
                    {currentPage}
                </button>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={!totalPages || currentPage >= totalPages}
                    className={`w-10 h-10 border rounded-full flex items-center justify-center transition ${(!totalPages || currentPage >= totalPages) ? 'opacity-50 cursor-not-allowed' : 'hover:border-red-500 hover:text-red-500'}`}
                >
                    <i className="fas fa-chevron-left text-xs rotate-180"></i>
                </button>
            </div>
        </div>
    );
}
