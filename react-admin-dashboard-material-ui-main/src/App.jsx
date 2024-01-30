import { Bar, Calendars, Contacts, Dashboard, FAQ, Geography, InputForm, Invoices, Line, Pie, SidebarMenu, Team, Topbar, FormulaireElement_Categorie, Login ,Inscription,Deconnexion,FormulaireElement_Modele,FormulaireElement_Carburant,FormulaireElement_Marque,Acceuille } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';
import { Outlet } from 'react-router-dom';



const App = () => {

  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        {/* Rest CSS */}
        <CssBaseline />

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Login />} exact></Route>
            <Route path="/Inscription" element={<Inscription />} exact></Route> 
            <Route path="/*" exact element={
              <main className="app">
                <SidebarMenu />
                <section className="content">
                  <Topbar />
                  <Outlet />
                </section>
              </main>
            }>
              <Route path="Acceuille" element={<Acceuille />} exact></Route> 
              <Route path="FormulaireElement_Categorie" element={<FormulaireElement_Categorie />} exact></Route> 
              <Route path="FormulaireElement_Modele" element={<FormulaireElement_Modele />} exact></Route> 
              <Route path="FormulaireElement_Carburant" element={<FormulaireElement_Carburant />} exact></Route> 
              <Route path="FormulaireElement_Marque" element={<FormulaireElement_Marque />} exact></Route> 
              <Route path="Dashboard" element={<Dashboard />} exact></Route> 
              <Route path="team" element={<Team />} exact></Route>
              <Route path="Deconnexion" element={<Deconnexion />} exact></Route> 
              <Route path="contacts" element={<Contacts />} exact></Route> 
              <Route path="invoices" element={<Invoices />} exact></Route> 
              <Route path="form" element={<InputForm />} exact></Route> 
              <Route path="calendar" element={<Calendars />} exact></Route> 
              <Route path="faq" element={<FAQ />} exact></Route> 
              <Route path="bar" element={<Bar />} exact></Route> 
              <Route path="pie" element={<Pie />} exact></Route> 
              <Route path="line" element={<Line />} exact></Route> 
              <Route path="geography" element={<Geography />} exact></Route> 
             
            </Route>

            <Route path="*" element={<Dashboard />} exact></Route> 
          </Routes>

        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;