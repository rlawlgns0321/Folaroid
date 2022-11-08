import { Grid, List } from '@mui/material';
import React from 'react';
import PortFolioItem from './PortFolioItem';

const PortfolioList = ({ portfolioList }) => {
    return (
        <div
            className="box"
            style={{
                marginLeft: '10%',
                marginRight: '10%',
            }}
        >
            <Grid container spacing={2} style={{}}>
                <Grid item xs={12} md={12}>
                    <List>
                        {portfolioList.map((value, key) => {
                            return <PortFolioItem key={key} num={value} />;
                        })}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
};

export default PortfolioList;
