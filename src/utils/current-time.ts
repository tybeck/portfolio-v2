'use strict';

export default function () {

  let date = new Date,

    absHour: number = date.getHours(),

    meridian: string = (absHour >= 12) ? 'PM' : 'AM',

    hour: number = (absHour > 12) ? date.getHours() % 12 : absHour,

    minute: any = date.getMinutes();

  if (minute < 10) {

    minute = ('0' + minute);

  }

  return(' ' + hour + ':' + minute + ' ' + meridian);

};
