'use client'

import { Card, CardContent, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react"

interface data {
    id: number
    title: string
    content: string
    author: string
    date: string
    views: number
    likes: number
}


export default function DataFetch() {
    const [data, setData] = useState<data[] | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchdata = async () => {
            try {
                const response = await fetch('/data.json');
                const data2 = await response.json();
                setData(data2);
                setLoading(false);
            } catch (error) {
                setError("Error fetch Data");
                setLoading(false)
            }
        }

        fetchdata();

    }, [])


    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            <CssBaseline />
            <h1>Data一覧</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: '#F5F5F5', margin: '0px', padding: '0px', display: 'flex', overflowX: 'auto', scrollbarWidth: 'none', whiteSpace: 'nowrap' }}>
                    {error && <div>{error}</div>}
                    {data && data.map((item) => (
                        <Card key={item.id} style={{ minHeight: ' 250px', margin: '10px', padding: '2px', flex: '0 0 calc(20%)', boxSizing: 'border-box' }}>
                            <CardContent>
                                <h3>{item.title}</h3>
                                <p style={{ fontSize: '12px', whiteSpace: 'wrap', }}>{item.content}</p>

                                {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /> */}
                                <p className="material-symbols-outlined">visibility</p>
                                {item.views}

                                <p className="material-symbols-outlined">person</p>
                                <p>
                                    {item.author}
                                </p>
                                <p>
                                    {item.likes}
                                </p>
                                {item.date}

                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}