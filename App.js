import * as React from 'react';
import { View, Text, StyleSheet, TextField, Button } from 'react-native';
import { Constants } from 'expo';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Email from './components/1_Email';
import Menu from './components/2_Menu';
import DL from './components/3_DL';
import WP from './components/3.a_Points';
import WP1 from './components/3.f_Points2';
import Catalog from './components/3.b_Catalog';
import Raiting from './components/3.c_Raiting';
import History from './components/3.d_History';
import WhereToSpend from './components/3.e_WhereToSpend';
import Integration from './components/4_Integration';
import Training from './components/5_Training';
import AboutCompany from './components/5.a_AboutCompany';
import Corporization from './components/5.b_Corporization';
import Safety from './components/5.c_Safety';
import Ecology from './components/5.d_Ecology';
import ProcessTraining from './components/5.e_ProcessTraining';
import Sport from './components/6_Sport';
import Results from './components/7_Results';
import Leadtime from './components/7.a_Leadtime';
import Ecom from './components/7.b_Ecom';
import TurnOver from './components/7.c_TurnOver';
import Links from './components/8_Links';

export default class App extends React.Component {
  render() {
    return (
      <View style = {{width: '100%', height: '100%'}}>
        <Router>
          <Stack key="root">
            <Scene key="menu" component={Menu} title="Меню"/>
            <Scene key="dl" component={DL} title=""/>
              <Scene key="wp" component={WP} title="Еженедельный бонус"/>
              <Scene key="wp1" component={WP1} title="Бонусные баллы"/>
              <Scene key="catalog" component={Catalog} title="О проекте"/>
              <Scene key="wheretospend" component={WhereToSpend} title="Каталог"/>
              <Scene key="raiting" component={Raiting} title="Рейтинг"/>
              <Scene key="history" component={History} title="Личный кабинет"/>
            <Scene key="integration" component={Integration} title="Твоя интеграция"/>
            <Scene key="training" component={Training} title="Наши тренинги"/>
              <Scene key="aboutcompany" component={AboutCompany} title="О компании"/>
              <Scene key="corporization" component={Corporization} title="Акционирование"/>
              <Scene key="safety" component={Safety} title="Безопасность"/>
              <Scene key="ecology" component={Ecology} title="Экология"/>
              <Scene key="processtraining" component={ProcessTraining} title="Тренинги по процессам"/>
            <Scene key="sport" component={Sport} title="Наш спорт"/>
            <Scene key="results" component={Results} title="Результаты"/>
              <Scene key="leadtime" component={Leadtime} title="Leadtime"/>
              <Scene key="ecom" component={Ecom} title="Ecom"/>
              <Scene key="turnover" component={TurnOver} title="Turnover"/>
            <Scene key="links" component={Links} title="Полезные ссылки"/>
            <Scene key="email" component={Email} title="Обратная связь"/>   
          </Stack>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
