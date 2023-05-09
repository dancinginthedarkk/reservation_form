export function isDatetimeValid(datetimeValue) {
    const selectedDateTime = new Date(datetimeValue);
    const currentDateTime = new Date();
    return selectedDateTime > currentDateTime;
}
