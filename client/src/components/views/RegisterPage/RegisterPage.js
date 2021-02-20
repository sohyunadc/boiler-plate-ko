import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action'

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 추가하지 않으면 페이지가 로그인 버튼을 누를때마다 리프레쉬된다. 이후 동작을 실행할 수 없다.

        console.log('Email', Email)
        console.log('Password', Password)

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인 값이 같아야합니다.')
        }

        let body = {
            nmae: Name,
            email: Email,
            password: Password
        }

        // axios를 쓴다면 axios.post('/api/users/register', body) 이런식으로 쓸텐데
        // 여기서는 redux를 사용해보려고 하기때문에 dispatch를 이용했다.
        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success) {
                    props.history.push('/login')
                } else {
                    alert('회원가입 ')
                }
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
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
               
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
               
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                <br />
                <button>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
