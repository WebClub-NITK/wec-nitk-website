'use client';

import { usePathname, useSearchParams, useRouter, useState } from 'next/navigation';
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Pagination({ totalPages }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const handlePageChange = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="pagination flex flex-row justify-center items-center gap-4">
        {/* Previous Button */}
        {currentPage > 1 && (
            <button
             className="flex items-center gap-2 rounded-full px-3 py-1"
             onClick={() => handlePageChange(currentPage - 1)}
            
           >
             <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
           </button>
           )}

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
            <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded-full transition ${
                    index + 1 === currentPage ? "active" : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
            >
            {index + 1}
            </button>
        ))}</div>

        {/* Next Button */}
        {currentPage < totalPages && (
             <button
             className="flex items-center gap-2 rounded-full px-3 py-1"
             onClick={() => handlePageChange(currentPage + 1)}
            
           >
             Next
             <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
           </button>
        )}
        </div>

    );
}

