/**
 * returns a promise with a delay of time
 * @param time number (millis)
 * @returns Promise<unknown>
 */
export function delay(time: number): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, time));
}
