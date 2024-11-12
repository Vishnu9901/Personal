import React from 'react';
import { FilterBadge } from '../FilterBadge';
import { ClearAllButton } from '../ClearButton';


interface FilterContainerProps {
    filters: string[];
    onRemoveFilter: (filter: string) => void;
    onClearAll: () => void;
    showClearButton?: boolean;
}

export const FilterContainer: React.FC<FilterContainerProps> = ({ filters, onRemoveFilter, onClearAll, showClearButton = true }) => {
    return (
        <div className="flex flex-wrap items-center whitespace-nowrap">
            {filters.map((filter, index) => (
                <FilterBadge
                    key={index}
                    onRemove={() => onRemoveFilter(filter)}
                >
                    {filter}
                </FilterBadge>
            ))}

            {filters.length > 0 && showClearButton && (
                <ClearAllButton onClearAll={onClearAll} />
            )}
        </div>
    );
};
