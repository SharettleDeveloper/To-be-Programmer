'use client'

import { Button, TextField} from "@mui/material";
import { useState } from "react"

export default function () {
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [nameerror, setNameError] = useState<string>('');
    const [emailerror, setEmailError] = useState<string>('');
    const [message, setMessage] = useState<string>('');



    const clearForm = () => {
        setUserName('');
        setEmail('')
        setNameError('');
        setEmailError('');
        setMessage('');
    }
    const handleSendForm = () => {
        
        setNameError('');
        setEmailError('');
        if (!userName.trim()) {
            setNameError('ユーザー名を入力してください');
        }
        if (!email.trim()) {
            setEmailError('メールアドレスを入力してください')
        } else {
        }
        if (userName.trim() && email.trim()) {
            if (!email.includes('@')) {
                setEmailError('@を入力してください。')
            } else {
                clearForm();
                console.log('userName : ' + userName + '\nemail: ' + email + '\nmessage : ' + message)
            }
        }
    }
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '10px' }}>
            <h2>Ipnut User Infomation</h2>
            <div style={{ marginBottom: '10px' }}>
                <TextField fullWidth variant="outlined" label="username" value={userName} onChange={(e) => (setUserName(e.target.value))} />
                {nameerror && <p style={{ margin: '2px', color: 'red' }}>{nameerror}</p>}
            </div>
            <div style={{ marginBottom: '10px' }}>
                <TextField fullWidth variant="outlined" label="E-mail" value={email} onChange={(e) => (setEmail(e.target.value))} />
                {emailerror && <p style={{ margin: '2px', color: 'red' }}>{emailerror}</p>}
            </div>
            <div style={{ marginBottom: '10px' }}>
                <TextField fullWidth variant="outlined" label="message" value={message} onChange={(e) => (setMessage(e.target.value))} />
            </div>
            <div style={{}}>
                <Button onClick={handleSendForm} variant="contained" >Send</Button>
            </div>
        </div>
    )
}

// 正規表現 ^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z{2,}  [a-z] .... \d \D \w a-z A-Z 0-9 \w \W \s \S \s\S]$
//* + *+*+*+*+*+*+???*+?{n} {n,}n回以上 {n,} n回以上 {n,m} \wn~m \q{n,m}* + ? {2,} {*, 9} d{3}
// \d{3}-\d{4} ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

//  ^\d{e,4}-\d{2,4}-\d{4}$ 電話番号
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[W]).{8,}$