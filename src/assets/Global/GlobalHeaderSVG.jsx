import React from 'react';

const GlobalHeaderSvg = ({id}) => {
   switch (id) {
       case 'user':
           return (
               <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M13.3333 14.5V13.1667C13.3333 12.4594 13.0523 11.7811 12.5522 11.281C12.0521 10.781 11.3739 10.5 10.6666 10.5H5.33329C4.62605 10.5 3.94777 10.781 3.44767 11.281C2.94758 11.7811 2.66663 12.4594 2.66663 13.1667V14.5" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M8.00004 7.83333C9.4728 7.83333 10.6667 6.63943 10.6667 5.16667C10.6667 3.69391 9.4728 2.5 8.00004 2.5C6.52728 2.5 5.33337 3.69391 5.33337 5.16667C5.33337 6.63943 6.52728 7.83333 8.00004 7.83333Z" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
           )
       case 'heart':
           return (
               <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M13.8933 3.57333C13.5528 3.23267 13.1485 2.96243 12.7036 2.77805C12.2586 2.59368 11.7817 2.49878 11.3 2.49878C10.8183 2.49878 10.3414 2.59368 9.89643 2.77805C9.45145 2.96243 9.04717 3.23267 8.70666 3.57333L8 4.28L7.29333 3.57333C6.60554 2.88553 5.67269 2.49914 4.7 2.49914C3.72731 2.49914 2.79446 2.88553 2.10666 3.57333C1.41887 4.26112 1.03247 5.19397 1.03247 6.16666C1.03247 7.13935 1.41887 8.0722 2.10666 8.76L2.81333 9.46666L8 14.6533L13.1867 9.46666L13.8933 8.76C14.234 8.41949 14.5042 8.01521 14.6886 7.57023C14.873 7.12526 14.9679 6.64832 14.9679 6.16666C14.9679 5.685 14.873 5.20807 14.6886 4.76309C14.5042 4.31812 14.234 3.91383 13.8933 3.57333Z" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
           )
       case 'basket':
           return (
               <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <g clip-path="url(#clip0_166_234)">
                       <path d="M6.00004 15.1667C6.36823 15.1667 6.66671 14.8682 6.66671 14.5C6.66671 14.1319 6.36823 13.8334 6.00004 13.8334C5.63185 13.8334 5.33337 14.1319 5.33337 14.5C5.33337 14.8682 5.63185 15.1667 6.00004 15.1667Z" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M13.3333 15.1667C13.7015 15.1667 14 14.8682 14 14.5C14 14.1319 13.7015 13.8334 13.3333 13.8334C12.9651 13.8334 12.6666 14.1319 12.6666 14.5C12.6666 14.8682 12.9651 15.1667 13.3333 15.1667Z" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M0.666626 1.16663H3.33329L5.11996 10.0933C5.18092 10.4002 5.3479 10.6759 5.59166 10.8722C5.83541 11.0684 6.14042 11.1726 6.45329 11.1666H12.9333C13.2462 11.1726 13.5512 11.0684 13.7949 10.8722C14.0387 10.6759 14.2057 10.4002 14.2666 10.0933L15.3333 4.49996H3.99996" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </g>
                   <defs>
                       <clipPath id="clip0_166_234">
                           <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                       </clipPath>
                   </defs>
               </svg>
           )
       case 'frame':
           return (
               <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M2 3.49998H14M6 9.49998L4 5.49998L2 9.49998M14 9.49998L12 5.49998L10 9.49998M9 3.49998C9 4.05227 8.55228 3.99998 8 3.99998C7.44772 3.99998 7 4.05227 7 3.49998C7 2.9477 7.44772 2.99998 8 2.99998C8.55228 2.99998 9 2.9477 9 3.49998ZM6.12132 13.6507C4.94975 14.7831 3.05025 14.7831 1.87868 13.6507C1.26644 13.059 0.974146 12.2752 1.00179 11.5H6.99821C7.02585 12.2752 6.73356 13.059 6.12132 13.6507ZM14.1213 13.6507C12.9497 14.7831 11.0503 14.7831 9.87868 13.6507C9.26644 13.059 8.97415 12.2752 9.00179 11.5H14.9982C15.0259 12.2752 14.7336 13.059 14.1213 13.6507Z" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
           )
       case 'globe':
           return  (
               <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8.00004 15.1667C11.6819 15.1667 14.6667 12.1819 14.6667 8.50004C14.6667 4.81814 11.6819 1.83337 8.00004 1.83337C4.31814 1.83337 1.33337 4.81814 1.33337 8.50004C1.33337 12.1819 4.31814 15.1667 8.00004 15.1667Z" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M1.33337 8.5H14.6667" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M8.00004 1.83337C9.66756 3.65894 10.6152 6.02806 10.6667 8.50004C10.6152 10.972 9.66756 13.3411 8.00004 15.1667C6.33252 13.3411 5.38487 10.972 5.33337 8.50004C5.38487 6.02806 6.33252 3.65894 8.00004 1.83337Z" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
           )
       case 'vector':
           return (
               <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M1 1L4 4L7 1" stroke="#1F1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>

           )
       default :
           return <svg></svg>
   }
};

export default GlobalHeaderSvg;