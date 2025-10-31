export function getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; // for month we need to add 1, because that returns the index of the month
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}