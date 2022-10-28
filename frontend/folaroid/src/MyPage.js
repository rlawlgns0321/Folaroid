import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CreateIcon from '@mui/icons-material/Create';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import WebIcon from '@mui/icons-material/Web';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ListItemSecondaryAction } from '@mui/material';

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
const MyPage = () => {
  const onClick = () => {
    alert('User Data 없으면 alert바를 통해 가게 해버릴까?');
  };
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <>
      <div className="react">마이페이지</div>
      {/* <div>
        <div className="info">
          최초 정보를 작성해주세요. <CreateIcon onClick={onClick}></CreateIcon>
        </div>
      </div> */}
      <div
        className="box"
        style={{
          border: 'solid',
          borderColor: 'lightgrey',
          margin: '30px',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        <Grid
          container
          spacing={4}
          style={{ marginTop: '0px', marginBottom: '30px' }}
        >
          <Grid item xs={6} md={6}>
            <Typography variant="h5" component="div">
              <b>나의 정보</b>
            </Typography>
          </Grid>
          <Grid item xs={6} md={6}>
            <CreateIcon
              onClick={onClick}
              style={{ marginLeft: '30%' }}
            ></CreateIcon>
          </Grid>
          <Grid item xs={6} md={6}>
            <PersonIcon className="icon" fontSize="large"></PersonIcon>
            <TextField
              id="standard-read-only-input"
              label="Required*"
              defaultValue="Name"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <PhoneAndroidIcon
              className="icon"
              fontSize="large"
            ></PhoneAndroidIcon>
            <TextField
              id="standard-read-only-input"
              label="Required*"
              defaultValue="Phone"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <EventIcon className="icon" fontSize="large"></EventIcon>
            <TextField
              id="standard-read-only-input"
              label="Required*"
              defaultValue="Birth"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <EmailIcon className="icon" fontSize="large"></EmailIcon>
            <TextField
              id="standard-read-only-input"
              label="Required*"
              defaultValue="Email"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <GitHubIcon className="icon" fontSize="large"></GitHubIcon>
            <TextField
              id="standard-read-only-input"
              label="Required*"
              defaultValue="Github Link"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </Grid>
        </Grid>
      </div>
      <div
        className="box"
        style={{
          border: 'solid',
          borderColor: 'lightgrey',
          margin: '30px',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        <Grid
          container
          spacing={4}
          style={{ marginTop: '0px', marginBottom: '30px' }}
        >
          <Grid item xs={12} md={12}>
            <Typography variant="h5" component="div">
              <b>포트폴리오</b>
            </Typography>
            <Demo>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemSecondaryAction>
                      <IconButton edge="end">
                        <CreateIcon />
                      </IconButton>
                      <IconButton edge="end">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton edge="end">
                        <ContentCopyIcon />
                      </IconButton>
                      <IconButton edge="end">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                    <ListItemAvatar>
                      <Avatar>
                        <WebIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary="작성날짜"
                    />
                  </ListItem>
                )}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

MyPage.defaultProps = {
  name: 'MyPage',
};

export default MyPage;
