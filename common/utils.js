// export function decideTime(num) {
//     let d = Math.floor(num / 1440); // 60*24
//     let h = Math.floor((num - d * 1440) / 60);
//     let m = Math.round(num % 60);
//     if (d > 0) {
//       if (h === 0) {
//         return d + " h" + m + " m";
//       }
//       if (m === 0) {
//         return d + " d " + h + " h ";
//       } else {
//         return d + " d " + h + " h " + m + " m";
//       }
//     } else {
//       if (h === 0) {
//         return m + " m";
//       }
//       if (m === 0) {
//         return h + " h ";
//       } else {
//         return h + " h " + m + "m";
//       }
//     }
//   }