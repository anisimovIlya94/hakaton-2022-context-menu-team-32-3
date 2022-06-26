import moment from "moment";

export const getTodayDateFormat = (date) => {
   moment.locale('ru');
   return moment(date).format("ll")
}

export const getCurrentTime = (date) => {
    return moment(date).format('LTS')
}