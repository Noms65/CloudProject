import React, { useEffect } from 'react';
import { Box, Button, Grid, IconButton, Table, Paper, TableHead, TableBody, TableRow, Typography, TableCell, useTheme } from "@mui/material";

export function Logout() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Vous avez été déconnecté !');
        window.location.href = '/';
    }
    useEffect(() => {
        handleLogout();
    }, []);

    return null;
}

const Deconnexion = () => {
    return (
        <Grid>
            <Logout/>
        </Grid>
    );
};
export default Deconnexion;
