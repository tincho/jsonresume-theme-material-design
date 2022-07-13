/**
 * @return {string}
 */
module.exports = function formatDateHelper(date) {
    const options = {
        year: "numeric",
        month: "long",
    }
    
    return Intl.DateTimeFormat("en-US", options).format(fixDate(new Date(date)))
};

/**
 * prevents local runtime timezone modifications when timezone not specified
 * @returns {Date}
 */
function fixDate(date) {
    const d = date;
    d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
    return d;
};