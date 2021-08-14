export function convertString(str: string) {
    return str.replace(/[^A-Za-z]/g, "");
}