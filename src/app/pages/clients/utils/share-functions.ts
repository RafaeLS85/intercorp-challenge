import * as moment from "moment";

export const getAge = (date) => {
    return moment().diff(date, 'years');
}

