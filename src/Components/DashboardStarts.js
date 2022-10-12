import React from "react"
import {Grid, Paper} from "@mui/material";
import PieChartIcon from '@mui/icons-material/PieChart';
import Box from "@mui/material/Box";

const cards = [
    {
        'id': 1,
        'name': 'Licenses',
        'value': 0
    },
    {
        'id': 1,
        'name': 'Permits',
        'value': 0
    },
    {
        'id': 1,
        'name': 'Certificates',
        'value': 0
    }
]

export default function DashboardStarts() {
    return (
        <section>
            <Grid container spacing={2} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start'
            }}>
                <Grid item xs={6} md={8}>
                    <Paper elevation={0} sx={{
                        width: '1144.63px',
                        height: '203.8px',
                        borderRadius: '10px',
                        margin: '4rem auto',
                        background: '#F9FAFB',
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        padding: '0 2.5rem'


                    }}>
                        {
                            cards.map((card, index) => {
                                return <Paper key={index} sx={{
                                    width: '336px',
                                    height: '104px',
                                    margin: 'auto 0',
                                    padding: '0.5rem',
                                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.13))'
                                }}>
                                    <div className="icon flex-col-hstart-vstart clip-contents">
                                        <PieChartIcon className='fi-pie-chart'/>
                                    </div>
                                    <p className='starts-header'>{card.name}</p>
                                    <p className='starts-value'>{card.value}</p>

                                </Paper>
                            })
                        }

                    </Paper>
                </Grid>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    direction: 'row'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        direction: 'row'
                    }}>
                        <p className='dash-content'>Request</p>
                        <div className="compressed-2-items flex-row-vcenter-hstart clip-contents">
                            <p className='dept'>
                                By department
                            </p>
                            <p className='region'>
                                By region
                            </p>
                            <p className='type'>
                                By type
                            </p>


                        </div>
                    </div>
                    <div className='dash-divider'></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        direction: 'row'
                    }}>
                        <p className='dash-approval'>Awaiting Approval</p>
                    </div>
                </div>

            </Grid>

        </section>
    )
}
