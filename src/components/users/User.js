import React, {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Prompt } from 'react-router-dom'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function User(props) {
  console.log( props )
  const classes = useStyles()
  const [user, setUser]= useState()

  useEffect(()=>{
    loadUsers()

  },[])

  const loadUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const userList = await response.json()
        setUser(userList)
  }


  const backHandler = () => {
    props.history.go(-1)
  }

  return (
    <>
      <Prompt message="This is shown in a confirmation window" />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">ID</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Email&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Website&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Company Name&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user && user.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell  align="right">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                <StyledTableCell align="right">{row.website}</StyledTableCell>
                <StyledTableCell align="right">{row.company.name}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ margin:"10px"}}>
        <Button variant="contained" onClick={backHandler}>Back</Button>
      </div>
    </>

  );
}