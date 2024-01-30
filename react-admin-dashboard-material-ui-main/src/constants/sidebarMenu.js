import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const sidebarMenu = [
    {
        title: 'Acceuille',
        icon: HomeOutlinedIcon,
        path: '/Acceuille',
    },
    {
        title: 'Menu Info',
        tag: 'divider'
    },
    {
        title: 'Modele',
        icon: ContactsOutlinedIcon,
        path: '/FormulaireElement_Modele',
    },
    {
        title: 'Categorie',
        icon: ReceiptOutlinedIcon,
        path: '/FormulaireElement_Categorie',
    },
    {
        title: 'Carburant',
        icon: ReceiptOutlinedIcon,
        path: '/FormulaireElement_Carburant',
    },
    {
        title: 'Marque',
        icon: ReceiptOutlinedIcon,
        path: '/FormulaireElement_Marque',
    },
    {
        title: 'Annonce',
        tag: 'divider'
    },
    {
        title: 'Validation Annonce',
        icon: ReceiptOutlinedIcon,
        path: '/Dashboard',
    },
    {
        title: 'Gestion User ',
        icon: ReceiptOutlinedIcon,
        path: '/team',
    },
    {
        title: 'Satistique',
        tag: 'divider'
    },
    {
        title: 'Voiture en Vente',
        icon: BarChartOutlinedIcon,
        path: '/bar',
    },
    {
        title: 'Statistique',
        icon: PieChartOutlineOutlinedIcon,
        path: '/pie',
    },
    {
        title: "Chiffre Affaire",
        icon: TimelineOutlinedIcon,
        path: '/line',
    },
    {
        title: 'Deconnexion',
        tag: 'divider'
    },
    {
        title: "Deconnecter",
        icon: PeopleOutlinedIcon,
        path: '/Deconnexion',
    },
];