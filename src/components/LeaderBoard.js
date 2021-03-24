import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import {useEffect, useState, Fragment} from 'react';
import fetchData  from '../api';

const columns = [
    { id: 'user_poke_name', label: 'User Pokemon', minWidth: 170 },
    { id: 'random_poke_name', label: 'Opponent Pokemon', minWidth: 170 },
    { id: 'winner_poke_name', label: 'Winner', minWidth: 170 }
  ];

const useStyles = makeStyles({
    root: {
      width: '80%',
      margin: 'auto',
      paddingTop: '2rem'
     
    },
    container: {
      maxHeight: 550,
    },
  });  

const LeaderBoard = () =>{
    const [results, setResults] = useState();

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect( () =>{
        fetchData('https://pokemon-fight-api.herokuapp.com/game/leaderboard').
        then( data => setResults(data));
    }, [])
 
     
    return(
        <>
            <Paper className={classes.root}>
            {results &&
                <>
                    <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                    
                        <TableBody>
                            {results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        component="div"
                        count={results.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </> }  
            </Paper>        
        </>
    )
}
export default LeaderBoard;


