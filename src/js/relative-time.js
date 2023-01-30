export default function getRelativeTime(timeStamp) {
    let now = Date.now()
    const MINUTE = 60
    const HOUR = 3600
    const DAY = 86400
    const TO_SECONDS = 0.001

    let difference = now - timeStamp
    let differenceInSeconds = (difference * TO_SECONDS).toFixed()
    if(differenceInSeconds < MINUTE) {
        return "seconds ago"
    }
    if(differenceInSeconds < HOUR) {
        let minutes = (differenceInSeconds / MINUTE).toFixed()
        return `${minutes} minutes ago`
    }
    if(differenceInSeconds < DAY) {
        let hours = (differenceInSeconds / HOUR).toFixed()
        return `${hours} hours ago`
    }
    let days = (differenceInSeconds / DAY).toFixed()
    return `${days} days ago`
}
