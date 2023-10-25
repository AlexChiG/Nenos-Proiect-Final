// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

// export default function SimpleSnackbar({onCreate,onEdit,onDelete}) {
//     const [state, setState] = React.useState({
//         open: false,
//         vertical: 'top',
//         horizontal: 'center',
//       });

//   const { vertical, horizontal, open } = state;

//   const handleOpen = (newState) => () => {
//     setState({ ...newState, open: true });
//   };

//   const handleClose = () => {
//     setState({ ...state, open: false });
//   };

//   const action = (
//     <React.Fragment>
//       <Button color="secondary" size="small" onClick={handleClose}>
//         UNDO
//       </Button>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );

//   return (
//     <div>
//       <Button onClick={handleOpen({ vertical: 'bottom', horizontal: 'right' })}>
//         Open simple snackbar
//         </Button>
//       <Snackbar
//         anchorOrigin={{ vertical, horizontal }}
//         open={open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//         message="Note archived"
//         action={action}
//         key={vertical + horizontal}
//       />
//     </div>
//   );
// }