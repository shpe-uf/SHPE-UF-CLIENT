import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import {Container, Input, Button } from "semantic-ui-react";

function Volunteering() {
    const [code, setCode] = useState("");
    const [date, setDate] = useState("")
    const [checkIn, setCheckIn] = useState(false);


    function onSubmit(e) {
        e.preventDefault();
        setDate(new Date());
    }
    function makeQueryAPICall(){
        setDate("");
        setCode("");
        // Call Query
        // If it returns true, setCheckIn(true)
        // Else do nothing
        return;
    }

    useEffect(() => {
        if (date && code) {
            console.log("Updated date:", date);
            makeQueryAPICall(); // Call API after date is updated
        }
    }, [date]);

    return (
        <>
            <Title title="Volunteering" />
            <Container style={{ display: "flex" }}>
                {/* Try using a native form */}
                <form onSubmit={onSubmit} style={{ display: "flex" }}>
                    <Input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <Button type="submit" style={{ marginLeft: "20px" }}>
                        Check In
                    </Button>
                </form>
            </Container>
            <br/>
            {checkIn && (
                <>
                 <Container style={{ display: "flex" }}>
                    <h2>Name of Event:</h2>
                    </Container>
                    <br/>
                    <Container style={{ display: "flex" }}>
                    <p>Checked in at: (Time) </p>
                    </Container>
                    <br/>
                    <Container style={{ display: "flex" }}>
                    <Button type="submit" style={{ marginLeft: "20px" }}>
                            Check Out
                        </Button>
                    </Container>
                </>
               
                
            )}
        </>
    );
}

export default Volunteering;
