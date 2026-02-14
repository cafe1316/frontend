import { useState, useEffect } from "react";
import { ProductFilterParams, RoastLevel, FlavorNote } from "../../api/types/product";

interface ProductFiltersProps {
    filters: ProductFilterParams;
    onFilterChange: (newFilters: ProductFilterParams) => void;
    showCoffeeFilters?: boolean;
}

export default function ProductFilters({ filters, onFilterChange, showCoffeeFilters = true }: ProductFiltersProps) {
    // Local state for buffering changes (暂存状态)
    const [localFilters, setLocalFilters] = useState<ProductFilterParams>(filters);

    // Sync local state when props change (e.g. parent resets or category changes)
    useEffect(() => {
        setLocalFilters(filters);
    }, [filters]);

    const handleRoastToggle = (level: RoastLevel) => {
        const current = localFilters.roastLevels || [];
        const exists = current.includes(level);
        const newLevels = exists
            ? current.filter(l => l !== level)
            : [...current, level];
        setLocalFilters(prev => ({ ...prev, roastLevels: newLevels }));
    };

    const handleFlavorToggle = (note: FlavorNote) => {
        const current = localFilters.flavorNotes || [];
        const exists = current.includes(note);
        const newNotes = exists
            ? current.filter(n => n !== note)
            : [...current, note];
        setLocalFilters(prev => ({ ...prev, flavorNotes: newNotes }));
    };

    const handleOtherOptionToggle = (key: keyof ProductFilterParams, value: boolean) => {
        setLocalFilters(prev => ({ ...prev, [key]: value }));
    };

    const handlePriceChange = (value: number) => {
        setLocalFilters(prev => ({ ...prev, maxPrice: value }));
    };

    const applyFilters = () => {
        // Send all local changes to parent
        onFilterChange({ ...localFilters, page: 1 });
    };

    const resetFilters = () => {
        // Reset local state specific fields
        const resetState: ProductFilterParams = {
            ...localFilters,
            roastLevels: [],
            flavorNotes: [],
            minPrice: 0,
            maxPrice: 500,
            isOrganic: false,
            isSeasonal: false,
            isNewArrival: false,
            page: 1
        };
        setLocalFilters(resetState);
        onFilterChange(resetState); // Immediately apply reset
    };

    return (
        <div className="bg-gray-50 p-4 border-b">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {showCoffeeFilters && (
                    <>
                        <div>
                            <h3 className="text-sm font-medium mb-3">Roast Level</h3>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={localFilters.roastLevels?.includes(RoastLevel.Light) || false}
                                        onChange={() => handleRoastToggle(RoastLevel.Light)}
                                        className="rounded text-red-500 focus:ring-red-500"
                                    />
                                    <span className="text-sm">Light Roast</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={localFilters.roastLevels?.includes(RoastLevel.Medium) || false}
                                        onChange={() => handleRoastToggle(RoastLevel.Medium)}
                                        className="rounded text-red-500 focus:ring-red-500"
                                    />
                                    <span className="text-sm">Medium Roast</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={localFilters.roastLevels?.includes(RoastLevel.Dark) || false}
                                        onChange={() => handleRoastToggle(RoastLevel.Dark)}
                                        className="rounded text-red-500 focus:ring-red-500"
                                    />
                                    <span className="text-sm">Dark Roast</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium mb-3">Flavor Notes</h3>
                            <div className="space-y-2">
                                {(Object.keys(FlavorNote).filter(k => isNaN(Number(k))) as (keyof typeof FlavorNote)[]).map(key => {
                                    const noteValue = FlavorNote[key];
                                    return (
                                        <label key={noteValue} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={localFilters.flavorNotes?.includes(noteValue) || false}
                                                onChange={() => handleFlavorToggle(noteValue)}
                                                className="rounded text-red-500 focus:ring-red-500"
                                            />
                                            <span className="text-sm">{key}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}

                <div>
                    <h3 className="text-sm font-medium mb-3">Price Range</h3>
                    <div className="px-2">
                        <input
                            type="range"
                            min="0"
                            max="500"
                            step="10"
                            value={localFilters.maxPrice || 500}
                            onChange={(e) => handlePriceChange(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>$0</span>
                            <span>$500</span>
                        </div>
                        <div className="text-center text-sm mt-2">Max: ${localFilters.maxPrice || 500}</div>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-medium mb-3">Other Options</h3>
                    <div className="space-y-2">
                        {/* Organic and Seasonal are typically specific to Coffee/Food */}
                        {showCoffeeFilters && (
                            <>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={localFilters.isOrganic || false}
                                        onChange={(e) => handleOtherOptionToggle('isOrganic', e.target.checked)}
                                        className="rounded text-red-500 focus:ring-red-500"
                                    />
                                    <span className="text-sm">Organic</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={localFilters.isSeasonal || false}
                                        onChange={(e) => handleOtherOptionToggle('isSeasonal', e.target.checked)}
                                        className="rounded text-red-500 focus:ring-red-500"
                                    />
                                    <span className="text-sm">Seasonal / Limited</span>
                                </label>
                            </>
                        )}
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={localFilters.isNewArrival || false}
                                onChange={(e) => handleOtherOptionToggle('isNewArrival', e.target.checked)}
                                className="rounded text-red-500 focus:ring-red-500"
                            />
                            <span className="text-sm">New Arrival</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-4 space-x-3">
                <button
                    onClick={resetFilters}
                    className="px-4 py-2 border rounded-full hover:bg-gray-100 transition text-sm"
                >
                    Reset
                </button>
                <button
                    onClick={applyFilters}
                    className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-sm"
                >
                    Apply
                </button>
            </div>
        </div>
    );
}
