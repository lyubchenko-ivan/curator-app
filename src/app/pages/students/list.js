import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
    "Id",
    "Имя",
    "Фамилия",
    "Возраст",
    "Адрес",
    "Телефон",
    "Успеваемость"
]

export default function StudentsList() {
    const [data, setData] = React.useState(null);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('http://localhost:3001/students')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No students data</p>

    return (
        
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow key={-1}>
                        {columns.map((column) => (
                            <TableCell>{column}</TableCell>  
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align='right'>
                                {row.first_name}
                            </TableCell>
                            <TableCell align='right'>
                                {row.last_name}
                            </TableCell>
                            <TableCell align='right'>
                                {row.age}
                            </TableCell>
                            <TableCell align='right'>
                                {row.address}
                            </TableCell>
                            <TableCell align='right'>
                                {row.phone_number}
                            </TableCell>
                            <TableCell align='right'>
                                {row.average_point}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}