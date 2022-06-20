import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
   searchContainer: {
       [theme.breakpoints.down('sm')]: {
           display: 'flex',
           justifyContent: 'center',
           width: '100%',
       },
   },
   input: {
    [theme.breakpoints.down('sm')]: {
        color: theme.palette.mode === 'light' && 'black',
        filter: theme.palette.mode === 'light' && 'invert(1)',
        marginTop: '-10px',
        marginBottom: '10px',
        width: '100%',
    },
   }
}))