import React from 'react';
import mongoose from 'mongoose';


// [
//   {
//     $unwind: {
//       path: "$categories"
//     }
//   },
//   {
//     $group: {
//       _id: "$categories.category",
//       total: {
//         $sum: 1
//       }
//     }
//   },
//   {
//     $sort: {
//       total: -1
//     }
//   }
// ];

class CheckBox extends React.Component {
    constructor(props) {
        super(props)
    };

    render () {

    };
};





export default CheckBox;
