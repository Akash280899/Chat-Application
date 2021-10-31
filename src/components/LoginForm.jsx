import { useState } from "react/cjs/react.development"
import axios from "axios";
const LoginForm = () => {
    const [ username, setusername ] = useState('');
    const [ password, setpassword ] = useState('');
    const [ error, seterror ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': "900a891f-8311-4779-b6c4-2281677ab1bf",
            'User-Name': username,
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats',
            {
                headers: authObject
            });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            seterror('');
        } catch (error) {
            seterror('Oops, incorrect credentials..')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setusername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setpassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">
                        {error}
                    </h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;