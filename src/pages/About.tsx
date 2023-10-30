import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export function About () {
    return <>
    <Box sx={{width:"300px", bgcolor: 'grey'}}>
    <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding sx={{background: "blue" ,
        '&:hover': {background: "yellow"}
        }}>
            <ListItemButton>
              <ListItemIcon>
                {/* <InboxIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <DraftsIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    </>
}