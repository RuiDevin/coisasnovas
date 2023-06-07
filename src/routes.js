import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons';

import Busca from 'src/pages/Buscas';
import Carteira from 'src/pages/Carteira';
import Home from 'src/pages/Home';
import Pedidos from 'src/pages/Pedido';
import Perfil from 'src/pages/Perfil';