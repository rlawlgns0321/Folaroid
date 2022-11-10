import { Grid, List } from '@mui/material';
import React from 'react';
import PortfolioItemContainer from '../../containers/portfolio/PortfolioItemContainer';

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
                        {portfolioList.map((pf, key) => {
                            return <PortfolioItemContainer key={key} pf={pf} />;
                        })}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
};

export default PortfolioList;
