import moment from "moment";

export const getTodayDateFormat = (date) => {
   return moment(date).format("MMMM Do YYYY")
}

export const getCurrentTime = (date) => {
    return moment(date).format('LTS')
}