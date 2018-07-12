import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ButtonAppBar, TemporaryDrawer, ProfileCard, ProjectListing, Biography } from './components';

const theme = createMuiTheme()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TemporaryDrawer></TemporaryDrawer>
        <ButtonAppBar></ButtonAppBar>
        <div className={"style"}style={{display: 'flex', justifyContent: 'space-around'}}>
          <ProfileCard></ProfileCard>
          <ProjectListing></ProjectListing>
          <Biography></Biography>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
