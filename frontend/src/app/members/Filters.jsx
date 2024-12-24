"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FilterIcon } from "lucide-react"

export default function Filters ({ selected, select }) {
    const filters = ["All", "Algorithms", "Intelligence", "GDG On Campus", "Systems & Security", "Alumni"]

    let selectedText = filters[selected]

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
                        {
                            filters.map((filter, i) => {
                                return (
                                    <DropdownMenuRadioItem key={filter} value={i} onClick={() => select(i)} className="cursor-pointer">{filter}</DropdownMenuRadioItem>
                                )
                            })
                        }
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
