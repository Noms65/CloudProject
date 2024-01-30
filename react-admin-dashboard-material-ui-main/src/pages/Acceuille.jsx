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



export function User() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Liste User
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nom</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>user 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>user 2</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};

export function AnnonceAttente() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Liste Annonce en attente
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Titre</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Annonce 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Annonce 2</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};

export function VoitureVente() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Liste Voiture en vente
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Categorie</TableCell>
                            <TableCell>Modele</TableCell>
                            <TableCell>Marque</TableCell>
                            <TableCell>Carburant</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>fiara</TableCell>
                            <TableCell>sport</TableCell>
                            <TableCell>4 * 4</TableCell>
                            <TableCell>toyota</TableCell>
                            <TableCell>diesel</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>1</TableCell>
                            <TableCell>fiara</TableCell>
                            <TableCell>sport</TableCell>
                            <TableCell>205</TableCell>
                            <TableCell>pezotra</TableCell>
                            <TableCell>diesel</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};

export function AnnonceTotal() {

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Tous les Annonces
                </Typography>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Titre</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Annonce 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Annonce 2</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};

const Acceuille = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Box m="100px">
            <Grid container spacing={2}>
                <Box>
                    Statistique tableau
                </Box>
                <User/>
                <AnnonceAttente/>
                <VoitureVente/>
                <AnnonceTotal/>
            </Grid>
        </Box>

    );
};

export default Acceuille;