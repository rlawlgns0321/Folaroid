import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(school, major, degree, admission, graduation, credit, maxcredit) {
  return {school, major, degree, admission, graduation, credit, maxcredit};
}

const rows = [
  createData('중앙대학교', '물리학과', '학사', 2017.03, 2022.02, 3.5, 4.5)
];



const SchoolInputModule = () => {
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [degree, setDegree] = useState('');
  const [admission, setAdmission] = useState('');
  const [graduation, setGraduation] = useState('');
  const [credit, setCredit] = useState('');
  const [maxcredit, setMaxcredit] = useState('');

  const handleChangeSchool = (event) => {
    setSchool(event.target.value);
  };

  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  };

  const handleChangeDegree = (event) => {
    setDegree(event.target.value);
  };

  const handleChangeAdmission = (event) => {
    setAdmission(event.target.value);
  };

  const handleChangeGraduation = (event) => {
    setGraduation(event.target.value);
  };

  const handleChangeCredit = (event) => {
    setCredit(event.target.value);
  };

  const handleChangeMaxcredit = (event) => {
    setMaxcredit(event.target.value);
  };


  const handleSubmit = (event) => {
    alert(`이름: ${school}`);
    event.preventDefault();
  };

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader action={<Button>추가</Button>} title="학력" />
      <CardContent>
        <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <div style={{ width: '100%' }}>
              <TextField
                label="이메일"
                type="text"
                placeholder="example@ssafy.com"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: '40%' }}
                onChange={handleChangeSchool}
              />
            </div>
            <div>
              <Button type="submit" variant="contained">
                제출
              </Button>
            </div>
          </div>
        </form>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>학교</TableCell>
                <TableCell align='center'>전공</TableCell>
                <TableCell align='center'>학위</TableCell>
                <TableCell align='center'>입학</TableCell>
                <TableCell align='center'>졸업</TableCell>
                <TableCell align='center'>학점</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                key={row.school}
                sx={{ '&:last-child  td, &:last-child th': {border:0}}}>
                  <TableCell align='center'>{row.school}</TableCell>
                  <TableCell align='center'>{row.major}</TableCell>
                  <TableCell align='center'>{row.degree}</TableCell>
                  <TableCell align='center'>{row.admission}</TableCell>
                  <TableCell align='center'>{row.graduation}</TableCell>
                  <TableCell align='center'>{row.credit}/{row.maxcredit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};



export default SchoolInputModule;
