import React from 'react';
import DashboardCards from "../Components/DashboardCards";
import {Button} from "@mui/material";
import LicensesTable from "../Components/LicensesTable";

function ServiceSummary(props) {
    return (
        <div className='licenses'>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flexFlow:"column"
            }}>
                <p className='licences-title'>Services Summary</p>
                <DashboardCards/>
                <Button color='secondary' variant='contained' sx={{
                    top: '17rem',
                    width:'12rem',
                    left: '3.5rem',
                    background: '#5570F1'

                }}>
                    create a service
                </Button>
            </div>
            <div style={{
                paddingTop:'20rem',
                paddingLeft:'3.5rem',
            }}>
                <LicensesTable/>
            </div>
        </div>
    );
}

export default ServiceSummary;