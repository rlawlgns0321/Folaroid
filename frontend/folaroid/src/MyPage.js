import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CreateIcon from '@mui/icons-material/Create';

const MyPage = () => {
  const onClick = () => {
    alert('내정보작성페이지 갈거임');
  };
  return (
    <>
      <div className="react">Folaroid</div>
      {/* <div>
        <div className="info">
          최초 정보를 작성해주세요. <CreateIcon onClick={onClick}></CreateIcon>
        </div>
      </div> */}
      <div className="box">
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <CreateIcon onClick={onClick}></CreateIcon>
          </Grid>
          <Grid item xs={6} md={6} placeItems="center">
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
            <PhoneAndroidIcon fontSize="large"></PhoneAndroidIcon>
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
            <EventIcon fontSize="large"></EventIcon>
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
            <EmailIcon fontSize="large"></EmailIcon>
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
            <GitHubIcon fontSize="large"></GitHubIcon>
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
    </>
  );
};

MyPage.defaultProps = {
  name: 'MyPage',
};

export default MyPage;
