"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function Pagination({ totalPages }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const handlePageChange = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="pagination flex flex-row justify-center items-center gap-4 mt-11">
 
            {currentPage > 1 && (
                <button className="flex items-center gap-2 rounded-full px-3 py-1" onClick={() => handlePageChange(currentPage - 1)}>
                    <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
                </button>
            )}

            <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 rounded-full transition ${index + 1 === currentPage ? "bg-gray-800 text-white" : "bg-gray-300 text-black hover:bg-gray-500"}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {currentPage < totalPages && (
                <button className="flex items-center gap-2 rounded-full px-3 py-1" onClick={() => handlePageChange(currentPage + 1)}>
                    Next <FaArrowRight strokeWidth={2} className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}
