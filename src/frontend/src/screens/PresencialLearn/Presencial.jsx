import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Card from '../../components/Card/Card.jsx';
import SampleText from '../../components/Text/SampleText.jsx';
import axios from "axios";

export default function Presencial() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://mini-projeto-m4.onrender.com/presencial-orgs");
                setData(res.data.allOrgs);
                console.log(res.data);
            } catch (error) {
                console.log("Error getting information:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header image={false} />
            <br />
            <SampleText
                title="aqui está a lista de todas as instituições de ensino presenciais cadastradas:"
                text="aproveite ao máximo!"
            />
            <br />
            {data.map((org, index) => (
                <div key={index}>
                    <Card name={org.name} adress={org.adress} website={org.website} description={org.description} contact={org.contact} />
                    <br />
                </div>
            ))}
        </>
    );
}