import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CoinDetails from "./CoinDetails";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const fetchApi = async () => {
    setFlag(true);
    const apiData = await fetch(
      "https://api.buyucoin.com/ticker/v1.0/liveData"
    );
    const convertedData = await apiData.json();
    setData(convertedData.data);
    setFlag(false);
  };

  useEffect(() => {
    fetchApi();
    console.log(data);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
       heigth:'100%',// Adjust the height as needed
        flexDirection:'column'
      }}
    >
      {flag ? (
        <CircularProgress />
      ) : (
        <div>
          <h2 style={{textAlign:'center'}}>Welcome to BitCoin</h2>
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ fontWeight: "bold" }}>
                    BitCoin Name
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Market Name
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Bid Price
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Ask Price
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Active
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Asked Volume
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Total Bid Volume
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={() => {
                      navigate(`/CoinDetails/${row.baseCurrencyId}`);
                    }}
                  >
                    <TableCell>{row.currToName}</TableCell>
                    <TableCell align="right">{row.marketName}</TableCell>
                    <TableCell align="right">{row.bid}</TableCell>
                    <TableCell align="right">{row.ask}</TableCell>
                    <TableCell align="right">{row.isActive + ""}</TableCell>
                    <TableCell align="right">{row.tVolAsk}</TableCell>
                    <TableCell align="right">{row.tVolBid}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </Box>
  );
}

export default Home;
