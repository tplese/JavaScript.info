"use strict";

function formatDate(date) {
   let now = new Date();
   //console.log(now);
   //let oneSec = new Date(now - 1);
   //console.log(oneSec);

   let difference = now.getTime() - date.getTime();
   //console.log(difference);


   if (difference < 1000) {
      return "right now";
   } else if (difference < 60 * 1000) {
      return `${difference / 1000} sec. ago`;
   } else if (difference < 3600 * 1000) {
      return `${difference / (60 * 1000)} min. ago`;
   } else {
      let dateDay = date.getDate();
      if (dateDay < 10) {
         dateDay = `0${dateDay}`;
      };
      
      let month = date.getMonth() + 1;      
      if (month < 10) {
         month = `0${month}`;
      };
      
      let year = date.getFullYear();
      if (year < 10) {
         year = `0${year}`;
      } else if (year >= 100) {
         year = year.toString().substr(-2);
      };
      
      let hours = date.getHours();
      if (hours < 10) {
         hours = `0${hours}`;
      };

      let minutes = date.getMinutes();
      if (minutes < 10) {
         minutes = `0${minutes}`;
      };
      
      return `${dateDay}.${month}.${year} ${hours}:${minutes}`;
   };
}
//console.log( formatDate( new Date(new Date - 1) ) );
//console.log( formatDate( new Date(new Date - 30 * 1000) ) );
//console.log( formatDate( new Date(new Date - 5 * 60 * 1000) ) );
//console.log( formatDate( new Date(new Date - 86400 * 1000) ) );
//console.log( formatDate(new Date(2016, 0, 30, 10, 0, 0)) );
alert( formatDate(new Date(new Date - 1)) ); // "right now"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
// yesterday's date
alert( formatDate(new Date(new Date - 86400 * 1000)) );