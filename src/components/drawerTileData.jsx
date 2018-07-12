import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';


export const mailFolderListItems = (
  <div>
    <ListItem button >
      <a href="https://github.com/nlhowell12?tab=repositories" target="_blank" rel="noopener noreferrer">
      <ListItemIcon>
      <img src={require("./images/GitHub_Logo.png")} alt="github" style={{maxWidth: '100%', maxHeight: '40px'}}/>
      </ListItemIcon>
      </a>
    </ListItem>
    <ListItem button >
      <a href="https://www.linkedin.com/in/nick-howell/" target="_blank" rel="noopener noreferrer">
      <ListItemIcon>
        <img src={require("./images/linkedInLogo.png")} alt="linkedIn"/>
      </ListItemIcon>
      </a>
    </ListItem>
    <a href="mailto:nlhowell12@gmail.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon/>
      </ListItemIcon>
      <ListItemText primary="Contact Me" />
    </ListItem>
    </a>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <a href="https://www.kenzie.academy" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
    <ListItem button>
      <ListItemIcon>
        <img src={require("./images/Kenzie.jpeg")} alt="" style={{height: '35px', width: '35px'}}/>
      </ListItemIcon>
      <ListItemText primary="Kenzie Academy" />
    </ListItem>
    </a>
  </div>
);