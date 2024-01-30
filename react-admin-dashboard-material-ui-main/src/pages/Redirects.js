
import { Tab,Tabs,Application,App1 } from './Template';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import { UserIndividual } from './UserIndividual';
import {  ListEnchere } from './ListEnchere';
import { EditUser } from './EditUser';
import User  from './User';
import React,{ useState } from 'react';
import {Example} from './Example';
import Login from './Login';


export  function Redirects(){
  
  function Historique() {
      const token = localStorage.getItem('token');
      if(token)
      {
        window.location.href = '/Acceuille';
      }
      else {
        alert("Vous devez être connecté pour accéder à cette page");
        window.location.href = '/Login';
      }
  }
}