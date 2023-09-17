import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CoinDetails(route) {

    const { coinId } = useParams();
    const [flag, setFlag] = useState(false)
    const [currencyData, setCurrencyData] = useState([])
    // console.log("asdasdas",coinId)

    const coinDetail = async () =>{
        setFlag(true)
        const data = await fetch('https://api.buyucoin.com/ticker/v1.0/allCurrencies')
        const data1 = await data.json()
        setCurrencyData(data1.data)   
        // const data3 = data1.data.filter((crr)=>crr._id == coinId)
        setCurrencyData(data1.data.filter((crr)=>crr._id == coinId))
        setFlag(false)

     }
     let coin;
    useEffect(()=>{
        coinDetail()
    
    },[])
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        height: '100vh', // Adjust the height as needed
      }}>
        {flag?(<CircularProgress  />):(<TableContainer component={Paper}>
            <h3>Coin Detail</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coin Name</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Max Deposit</TableCell>
            <TableCell align="right">Max Withdraw</TableCell>
            <TableCell align="right">Min Deposit</TableCell>
            <TableCell align="right">Min Withdraw</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
           
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {currencyData[0]?.name}
              </TableCell>
              <TableCell align="right">{currencyData[0]?.code}</TableCell>
              <TableCell align="right">{currencyData[0]?.maxDeposit}</TableCell>
              <TableCell align="right">{currencyData[0]?.maxWithdraw}</TableCell>
              <TableCell align="right">{currencyData[0]?.minDeposit}</TableCell>
              <TableCell align="right">{currencyData[0]?.minWithdraw}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>)}
        
    </Box>
  )
}

export default CoinDetails