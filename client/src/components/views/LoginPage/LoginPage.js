import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux'

function LoginPage() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault(); // 추가하지 않으면 페이지가 로그인 버튼을 누를때마다 리프레쉬된다. 이후 동작을 실행할 수 없다.

        console.log('Email', Email)
        console.log('Password', Password)

        let body = {
            email: Email,
            password: Password
        }

        Axios.post('/api/user/login', body)
            .then(response => {

            })
    }


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
