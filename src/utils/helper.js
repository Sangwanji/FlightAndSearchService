
function isValidFlightTime(time1, time2) {
    const t1 = new Date(time1);
    const t2 = new Date(time2);

    if (isNaN(t1.getTime()) || isNaN(t2.getTime())) {
        return false;
    }

    return t2 > t1;
}

module.exports = {
    isValidFlightTime
};