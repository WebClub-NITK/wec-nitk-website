"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FilterIcon } from "lucide-react"

export default function Filters ({ selected, select }) {
    const filters = ["Algorithms", "Intelligence", "GDSC", "Systems & Security"]

    let selectedText = "All"
    if (selected == 5) selectedText = "Alumni"
    else if (selected > 0) selectedText = filters[selected-1]

    return (
        <div className="flex justify-end mt-4">
            <DropdownMenu className="p-2">
                <DropdownMenuTrigger asChild>
                    <Button className="flex items-center gap-2 m-2 hover:bg-primary-50 text-secondary-700" variant="outline">
                        <FilterIcon className="w-4 h-4" />
                        {selectedText}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuRadioGroup value={selected}>
                        <DropdownMenuRadioItem value={0} onClick={() => select(0)} className="cursor-pointer">All</DropdownMenuRadioItem>
                        {
                            filters.map((filter, i) => {
                                return (
                                    <DropdownMenuRadioItem key={filter} value={i+1} onClick={() => select(i+1)} className="cursor-pointer">{filter}</DropdownMenuRadioItem>
                                )
                            })
                        }
                        <DropdownMenuRadioItem value={5} onClick={() => select(5)} className="cursor-pointer">Alumni</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
