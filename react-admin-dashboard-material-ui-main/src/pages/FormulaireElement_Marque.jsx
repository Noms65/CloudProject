import { Header, GeographyChart, ProgressCircle, LineChart, BarChart, StatBox } from "../components";
import { Box, Button, Grid, IconButton, Table, Paper, TableHead, TableBody, TableRow, Typography, TableCell, useTheme } from "@mui/material";
import { mockTransactions } from "../constants/mockData";
import { tokens } from "../styles/theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import EmailIcon from "@mui/icons-material/Email";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Description } from "@mui/icons-material";


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { click } from "@testing-library/user-event/dist/click";



export function FormInput() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="carburant"
                            label="carburant"
                            type="carburant"
                            id="carburant"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Ajouter
                        </Button>
                    </Box>
                </Box>
            </Container>
    );
};

function BouttonOption({ onModifyClick, onDeleteClick }) {
    return (
        <Grid item>
            <Button
                variant="contained"
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    width: '100px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginRight: '8px',
                }}
                onClick={onModifyClick} // Pour le clic sur "Modifier"
            >
                Modifier
            </Button>
            <Button
                variant="contained"
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    width: '100px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                }}
                onClick={onDeleteClick} // Pour le clic sur "Supprimer"
            >
                Supprimer
            </Button>
        </Grid>
        
    );
};

function handleModify() {
    console.log('Modifier button clicked');
  }
  
  function handleDelete() {
    console.log('Supprimer button clicked');
  }

export function Formulaire() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Liste Marque
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Option</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Toyota</TableCell>
                            <TableCell><BouttonOption onModifyClick={handleModify} onDeleteClick={handleDelete} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>pezotra</TableCell>
                            <TableCell><BouttonOption onModifyClick={handleModify} onDeleteClick={handleDelete} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>wagon</TableCell>
                            <TableCell><BouttonOption onModifyClick={handleModify} onDeleteClick={handleDelete} /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};



const FormulaireElement_Marque = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Box m="100px">
            <Grid container spacing={2}>
                <Box>
                    Ajout Marque
                </Box>
                <FormInput />
                <Formulaire />
            </Grid>
        </Box>

    );
};

export default FormulaireElement_Marque;