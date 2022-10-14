import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import {Route, Routes, useLocation, useNavigate,} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import TopBar from "./TopBar";
import {drawer} from "./SideBar";
import Licences from "../Pages/Licences";
import ServiceSummary from "../Pages/ServiceSummary";

const drawerWidth = 240;

function CandidateSideBar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    function logOut() {
        return undefined;
    }

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: "flex"}}>
            <CssBaseline/>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: "block", sm: "none"},
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: "none", sm: "block"},
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: {sm: `calc(100% - ${drawerWidth}px)`, backgroundColor: 'white', height: '100vh'},
                }}
            >
                <TopBar/>
                {/* <Toolbar /> */}

                {/* Route to switch screens */}
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard/>}
                    />
                    <Route
                        path="/licences"
                        element={<Licences/>}
                    />
                    <Route
                        path="/services"
                        element={<ServiceSummary/>}
                    />
                </Routes>
            </Box>
        </Box>
    );
}

export default CandidateSideBar;
