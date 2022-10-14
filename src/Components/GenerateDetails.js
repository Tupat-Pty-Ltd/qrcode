import React from "react"
import Switch from "@mui/material/Switch";
import {Button} from "@mui/material";

export default function GenerateDetails() {
    return (
        <div className="frame-5799 flex-col-hstart-vstart clip-contents">
            <div className="group-653 flex-col">
                <div className="popupheading flex-col-hstart-vsb">
                    <div className="frame-5801 flex-row-vcenter-hsb">
                        <p className="txt-360 flex-hcenter">Generate Secure License</p>
                    </div>
                </div>
                <p className="txt-299 flex-hcenter">Client Information</p>
                <input className="group-5361" placeholder='001'/>
                <div className="group-807 flex-row">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/s93aakifrx-1810%3A56786?alt=media&token=78badc89-d190-4878-a627-d77a4fededd7"
                        alt="Not Found"
                        className="fi-file-text"
                    />
                    <p className="txt-727 flex-hcenter">1</p>
                </div>
                <div className="group-5362 flex-col">
                    <p className="txt-494 flex-hcenter">Send to</p>
                    <div className="group-614 flex-row-vcenter">
                        <p className="txt-1035 flex-hcenter">Clients email</p>
                        <Switch className="toggle-control"/>
                        <p className="txt-682 flex-hcenter">Clients Portal</p>
                        <Switch className="toggle-control"/>
                    </div>
                    <p className="txt-494 flex-hcenter">Export as</p>
                    <div className="group-986 flex-row-vcenter">
                        <p className="txt-503 flex-hcenter">PDF</p>
                        <Switch className="toggle-control"/>
                        <p className="txt-503 flex-hcenter">Office Doc</p>
                        <Switch className="toggle-control"/>
                        <p className="txt-503 flex-hcenter">Excel</p>
                        <Switch className="toggle-control"/>
                    </div>
                </div>
                <div className="group-5363">
                    <p className="txt-1057 flex-hcenter">Security to embed</p>
                    <div className="flex-col-hend" style={{
                        paddingLeft:'5rem'
                    }}>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-evenly",
                            left: '2rem'
                        }}>
                            <p className="txt-735 flex-hcenter">Watermark</p>
                            <Switch className="toggle-control"/>
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-evenly",
                            left: '2rem'
                        }}>
                            <p className="txt-735 flex-hcenter">Signature</p>
                            <Switch className="toggle-control"/>
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-evenly",
                            left: '2rem'
                        }}>
                            <p className="txt-735 flex-hcenter">QR Code</p>
                            <Switch className="toggle-control"/>
                        </div>

                    </div>

                </div>
                <div className="group-336 flex-row">
                    <Button className="buttons flex-row-vcenter-hcenter">Cancel
                    </Button>
                    <Button className="buttons-1 flex-row-vcenter-hcenter">Process
                    </Button>
                </div>
            </div>
        </div>
    )
}
