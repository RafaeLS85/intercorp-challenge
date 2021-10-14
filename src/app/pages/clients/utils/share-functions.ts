import * as moment from "moment";

export const getAge = (date) => {    
    date = moment(date, "DD/MM/YYYY");    
    return moment().diff(date, 'years');
}

