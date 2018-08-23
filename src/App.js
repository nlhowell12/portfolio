import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ButtonAppBar, TemporaryDrawer, ProfileCard, ProjectListing, Biography, SimpleAppBar } from './components';

const theme = createMuiTheme()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TemporaryDrawer></TemporaryDrawer>
        <ButtonAppBar></ButtonAppBar>
        <div className={"style"}style={{display: 'flex', justifyContent: 'space-around', height: '675px'}}>
          <ProfileCard></ProfileCard>
          <ProjectListing></ProjectListing>
          <Biography></Biography>
        </div>
        <SimpleAppBar></SimpleAppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
