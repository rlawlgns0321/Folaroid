import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WebIcon from '@mui/icons-material/Web';
import { ListItemSecondaryAction } from '@mui/material';
const PortFolioItem = ({ num }) => {
    //보기 => router 포폴페이지
    //수정 => 제작페이지
    //복사 =? 같은 포폴페이지가 아래 추가됨
    //삭제 => 리스트에서 삭제
    return (
        <div>
            <Divider />
            <ListItem>
                <ListItemSecondaryAction>
                    <IconButton edge="end">
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton edge="end">
                        <CreateIcon />
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
                    primaryTypographyProps={{
                        color: 'primary',
                        fontWeight: 'bold',
                    }}
                    secondaryTypographyProps={{ fontWeight: 'bold' }}
                    primary={`포트폴리오 ${num + 1}`}
                    secondary={`작성날짜`}
                />
            </ListItem>
            <Divider />
        </div>
    );
};
export default PortFolioItem;
