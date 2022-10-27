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
    alert('User Data 없으면 alert바를 통해 가게 해버릴까?');
  };
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
          <Grid item xs={6} md={6} style={{}}>
            <b style={{ fontSize: '30px', marginRight: '20%' }}>기본정보</b>
          </Grid>
          <Grid item xs={6} md={6}>
            <CreateIcon
              onClick={onClick}
              style={{ marginLeft: '30%' }}
            ></CreateIcon>
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
    </>
  );
};

MyPage.defaultProps = {
  name: 'MyPage',
};

export default MyPage;
