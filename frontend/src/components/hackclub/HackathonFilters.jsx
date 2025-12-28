"use client"
import { useState, useMemo } from "react";
import { X, Filter } from "lucide-react";

/**
 * Extract unique modes from hackathons
 */
export function getAvailableModes(hackathons) {
    const modes = new Set();
    hackathons?.forEach(h => {
        const mode = h.attributes.mode?.toLowerCase().trim();
        if (mode) modes.add(mode);
    });
    return Array.from(modes).sort();
}

/**
 * Extract unique themes from hackathons (split by comma)
 */
export function getAvailableThemes(hackathons) {
    const themes = new Set();
    hackathons?.forEach(h => {
        const themeStr = h.attributes.theme;
        if (themeStr) {
            themeStr.split(',').forEach(t => {
                const trimmed = t.trim();
                if (trimmed) themes.add(trimmed);
            });
        }
    });
    return Array.from(themes).sort();
}

/**
 * Filter hackathons based on mode and theme
 */
export function filterByModeAndTheme(hackathonList, selectedModes, selectedThemes) {
    return hackathonList.filter(h => {
        // Mode filter
        if (selectedModes.length > 0) {
            const hackathonMode = h.attributes.mode?.toLowerCase().trim();
            if (!selectedModes.includes(hackathonMode)) return false;
        }

        // Theme filter
        if (selectedThemes.length > 0) {
            const hackathonThemes = h.attributes.theme?.split(',').map(t => t.trim()) || [];
            const hasMatchingTheme = selectedThemes.some(selectedTheme =>
                hackathonThemes.includes(selectedTheme)
            );
            if (!hasMatchingTheme) return false;
        }

        return true;
    });
}

/**
 * Filter button component (circular icon button)
 */
export function FilterButton({ onClick, hasActiveFilters, activeCount, isOpen }) {
    return (
        <button
            onClick={onClick}
            className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${
                isOpen || hasActiveFilters
                    ? 'bg-hackclub-primary text-white border-hackclub-primary'
                    : 'bg-hackclub-background text-gray-700 border-gray-300 hover:border-hackclub-primary hover:text-hackclub-primary'
            }`}
            aria-label="Toggle filters"
        >
            <Filter size={18} />
            {hasActiveFilters && !isOpen && (
                <span className="absolute -top-1 -right-1 bg-hackclub-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {activeCount}
                </span>
            )}
        </button>
    );
}

/**
 * Filter panel component
 */
export function FilterPanel({
    hackathons,
    selectedModes,
    selectedThemes,
    onToggleMode,
    onToggleTheme,
    onClearAll,
    isOpen
}) {
    const availableModes = useMemo(() => getAvailableModes(hackathons), [hackathons]);
    const availableThemes = useMemo(() => getAvailableThemes(hackathons), [hackathons]);
    const hasActiveFilters = selectedModes.length > 0 || selectedThemes.length > 0;

    if (!isOpen) return null;

    return (
        <div className="mt-4 p-4 bg-hackclub-background border border-gray-200 rounded-lg">
            {/* Mode Filter */}
            <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Mode</h4>
                <div className="flex flex-wrap gap-2">
                    {availableModes.map(mode => (
                        <button
                            key={mode}
                            onClick={() => onToggleMode(mode)}
                            className={`px-3 py-1.5 text-sm rounded-full border transition-colors capitalize ${
                                selectedModes.includes(mode)
                                    ? 'bg-hackclub-primary text-white border-hackclub-primary'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-hackclub-primary'
                            }`}
                        >
                            {mode}
                        </button>
                    ))}
                    {availableModes.length === 0 && (
                        <span className="text-gray-400 text-sm">No modes available</span>
                    )}
                </div>
            </div>

            {/* Theme Filter */}
            <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Theme</h4>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {availableThemes.map(theme => (
                        <button
                            key={theme}
                            onClick={() => onToggleTheme(theme)}
                            className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                                selectedThemes.includes(theme)
                                    ? 'bg-hackclub-primary text-white border-hackclub-primary'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-hackclub-primary'
                            }`}
                        >
                            {theme}
                        </button>
                    ))}
                    {availableThemes.length === 0 && (
                        <span className="text-gray-400 text-sm">No themes available</span>
                    )}
                </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
                <button
                    onClick={onClearAll}
                    className="flex items-center gap-1 text-sm text-hackclub-primary hover:underline"
                >
                    <X size={14} />
                    Clear all filters
                </button>
            )}
        </div>
    );
}

/**
 * Active filters display (shown when panel is closed)
 */
export function ActiveFiltersDisplay({
    selectedModes,
    selectedThemes,
    onToggleMode,
    onToggleTheme,
    onClearAll,
    showFilters
}) {
    const hasActiveFilters = selectedModes.length > 0 || selectedThemes.length > 0;

    if (!hasActiveFilters || showFilters) return null;

    return (
        <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500">Active:</span>
            {selectedModes.map(mode => (
                <span
                    key={mode}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-hackclub-primary/10 text-hackclub-primary text-sm rounded-full capitalize"
                >
                    {mode}
                    <button onClick={() => onToggleMode(mode)} className="hover:bg-hackclub-primary/20 rounded-full p-0.5">
                        <X size={12} />
                    </button>
                </span>
            ))}
            {selectedThemes.map(theme => (
                <span
                    key={theme}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                >
                    {theme}
                    <button onClick={() => onToggleTheme(theme)} className="hover:bg-blue-200 rounded-full p-0.5">
                        <X size={12} />
                    </button>
                </span>
            ))}
            <button
                onClick={onClearAll}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
                Clear all
            </button>
        </div>
    );
}

