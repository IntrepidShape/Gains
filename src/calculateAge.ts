export function calculateAge(birthDateStr: string): string {
    const birthDate = new Date(birthDateStr);
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = now.getTime() - birthDate.getTime();

    // Convert milliseconds to seconds, then to minutes, then to hours, then to days, and finally to years
    const diffInSeconds = diffInMs / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    const diffInYears = diffInDays / 365.25;

    // Return the result with the desired precision
    return diffInYears.toFixed(25);
}


