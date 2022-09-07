function getDays(date1, date2) {
    var fullDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((date1 - date2) / fullDay));
}