const SPANISH_TIMEZONE = 2 *3600;

export const extractDateTimeFromTimestamp = (timestamp: number) => {
    const date =  new Date((timestamp + SPANISH_TIMEZONE)*1000);
    return date.getUTCFullYear() +
        '-' + ('0' + date.getUTCMonth()).slice(-2) +
        '-' + ('0' + date.getUTCDate()).slice(-2) +
        ' ' + ('0' + date.getUTCHours()).slice(-2) +
        ':' + ('0' + date.getUTCMinutes()).slice(-2)
}

export const extractDateFromTimestamp = (timestamp: number) => {
    const date =  new Date((timestamp + SPANISH_TIMEZONE)*1000);
    return date.getUTCFullYear() +
        '-' + ('0' + date.getUTCMonth()).slice(-2) +
        '-' + ('0' + date.getUTCDate()).slice(-2);
}

export const extractTimeFromTimestamp = (timestamp: number) => {
    const date =  new Date((timestamp + SPANISH_TIMEZONE)*1000);
    return ('0' + date.getUTCHours()).slice(-2) +
        ':' + ('0' + date.getUTCMinutes()).slice(-2)
}