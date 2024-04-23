// Modal.js

import React from "react";

interface modalUi {
    isOpen: any
    onClose: () => void
    children: any
}

const Modal = (props: modalUi) => {
    if (!props.isOpen) return null;

    return (
        <div
            style={{
                textAlign: "center",
                display: "block",
                padding: 0,
                margin: "auto",
            }}
        >

            <div
                // onClick={props.onClose}
                className="rounded-xl"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="bg-slate-50 text-slate-950 flex items-center rounded-xl"
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
