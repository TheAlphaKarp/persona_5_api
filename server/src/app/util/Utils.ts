class Utils {
    public static isAlphaNumeric(value: string): boolean {
        const regex = new RegExp(/^[a-z0-9]+$/i);
        return regex.test(value);
    }
}