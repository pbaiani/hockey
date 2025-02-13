import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import People from '@material-ui/icons/People';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import { Link } from 'react-router-dom'

export const mailFolderListItems = (
    <div>
   <ListItem>
            <ListItemText secondary='Commissioner' />

   </ListItem>
      
       <Link to='/league'>
        <ListItem button >
            <ListItemIcon>
                <People />
            </ListItemIcon>
             <ListItemText primary="Edit League" />
        </ListItem>
        </Link>
        <Link to='/weirdo_check'>
        <ListItem button>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
        </ListItem>
</Link>



        <ListItem button>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send mail" />
        </ListItem>


        <Link to='/test'>
        <ListItem button>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="asych form test" />
        </ListItem>
        </Link>
    </div>
);

export const otherMailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="All mail" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
        </ListItem>
    </div>
);