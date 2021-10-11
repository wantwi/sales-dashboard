import value from '../../../../assets/scss/_themes-vars.scss';

export default {
    height: 300,
    type: 'area',
    toolbar: {
        show: false,
    },
    options: {
       
        fill: {
            type: 'gradient',
            gradient: {
                colors: ['#d3f3ff'],
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [100],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        grid: {
            show: true,
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            show: true,
            labels: {
                show: false,
            },
        },
       

        legend: {
            show: false,
            position: 'bottom',
            fontFamily: 'inherit',
            labels: {
                colors: 'inherit',
            },
        },
        itemMargin: {
            horizontal: 40,
            vertical: 20,
        },
        colors: ['#31c5fe'],
      
    },
    series: [
        {
            name: 'TEAM A',
            type: 'area',
            data: [30, 20, 40, 60, 65, 70, 70],
        },
    ],
};

// options:{
//     fill: {
//         type: "gradient",
//         gradient: {
//           shadeIntensity: 1,
//           opacityFrom: 0.7,
//           opacityTo: 0.9,
//           stops: [0, 90, 100]
//         }
//       },
//       yaxis: {
//         show: false
//     },
//     xaxis: {
//         labels: {
//             show: false
//         },
//         tooltip: {
//             enabled: false
//         }
//     },
//     grid: {
//         xaxis: {
//             lines: {
//                 show: false
//             }
//         },
//         yaxis: {
//             lines: {
//                 show: false
//             }
//         },
//     }
// }
