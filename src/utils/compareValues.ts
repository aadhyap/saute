// src/utils/compareValues.ts

export type SortDirection = "asc" | "desc";

/**
 * Compares two values for sorting.
 * Handles numbers and strings (case-insensitive, alphanumeric).
 * Treats undefined or null as empty strings.
 *
 * @param a - First value to compare.
 * @param b - Second value to compare.
 * @param direction - Sort direction: 'asc' or 'desc'.
 * @returns -1 if a < b, 1 if a > b, 0 if equal.
 */
export const compareValues = (
    a: any,
    b: any,
    direction: SortDirection
): number => {
    // Handle undefined or null
    if (a === null || a === undefined) a = "";
    if (b === null || b === undefined) b = "";

    // If both are numbers, compare numerically
    if (typeof a === "number" && typeof b === "number") {
        return direction === "asc" ? a - b : b - a;
    }

    // Convert to strings for comparison
    const aStr = a.toString().toLowerCase();
    const bStr = b.toString().toLowerCase();

    // Use Intl.Collator for locale-aware, alphanumeric sorting
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    const comparison = collator.compare(aStr, bStr);

    return direction === "asc" ? comparison : -comparison;
};
