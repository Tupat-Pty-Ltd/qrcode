import React from 'react';
import {Button, Paper} from "@mui/material";
import LicensesTable from "../Components/LicensesTable"

function Licences(props) {
    return (
        <div className='licenses'>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flexFlow:"column"
            }}>
                <p className='licences-title'>Licences Summary</p>
                <div>
                    <Paper sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        padding: '11px 15px',
                        gap: ' 10px',

                        position: 'absolute',
                        width: '538px',
                        height: "145px",
                        left: '60px',
                        top: '90px',
                        background: '#5570F1',
                        boxShadow: '0px 3px 17px #97B9FE',
                        borderRadius: '12px',

                    }}>
                        <div className="icon flex-col-hstart-vstart clip-contents">
                            <img
                                src="image unavailable"
                                alt="Not Found"
                                className="iconly-light-folder"
                            />
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",

                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                paddig: '0px',
                                gap: '8px',

                                width: '238px',
                                height: '62px',
                                flex: 'none',
                                order: 0,
                                flexGrow: 1,
                            }}>
                                <p>All licenses</p>
                                <p>0</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '8px',

                                width: '238px',
                                height: '62px',
                                flex: 'none',
                                order: 0,
                                flexGrow: 1,
                            }}>
                                <p>All Active</p>
                                <p>0</p>
                            </div>

                        </div>

                    </Paper>
                    <Paper sx={{
                        position: 'absolute',
                        width: '500px',
                        height: '145px',
                        left: '620px',
                        top: '90px',
                        filter: 'drop-shadow(0px 3px 17px #97B9FE)',
                        borderRadius: '12px',
                        padding: '11px 15px',

                    }}>
                        <div className="icon flex-col-hstart-vstart clip-contents">
                            <img
                                src="image unavailable"
                                alt="Not Found"
                                className="iconly-light-folder"
                            />
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: '1rem'

                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                paddig: '0px',
                                gap: '8px',

                                width: '238px',
                                height: '62px',
                            }}>
                                <p>All Requests</p>
                                <p>0</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                paddig: '0px',
                                gap: '8px',

                                width: '238px',
                                height: '62px',
                            }}>
                                <p>Received</p>
                                <p>0</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '8px',

                                width: '238px',
                                height: '62px',
                            }}>
                                <p>Pending</p>
                                <p>0</p>
                            </div>

                        </div>

                    </Paper>
                </div>
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

export default Licences;