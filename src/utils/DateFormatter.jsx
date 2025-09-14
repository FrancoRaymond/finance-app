export function formatDate(input, locale = "en-GB"){
    let date;
    if(typeof input === "number"){
        date = new Date(input)
    }else{
        date = new Date(input)
    }
    if(isNaN(date.getTime())){
        return "Invalid date"
    }
    return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(date)
}