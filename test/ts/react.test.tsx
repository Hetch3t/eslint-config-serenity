// eslint-disable-next-line import/no-unresolved
import { useState } from 'react'


export const AuthTest = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [accessToken, setAccessToken] = useState<string>('null')
	const [refreshToken, setRefreshToken] = useState<string>('null')
	const [{ foo, bar, bazsdsdsdsds }, setFooBarBaz] = useState({
		foo : 'bbb',
		bar : 'aaa',
		baz : 'qqq'
	})

	const user = {
		name : 'John Doe',
		age  : 30
	}

	const handleEmail = event => {
		setEmail(event.target.value)
	}

	const handlePassword = event => {
		setPassword(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()

		fetch('/api/auth/login', {
			method  : 'POST',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({
				email,
				password
			})
		})
			.then(value => value.json())
			.then(value => {
				setAccessToken(value.accessToken!)
				setRefreshToken(value.refreshToken!)
			})
	}

	const handleRefresh = () => {
		fetch('/api/auth/refresh-tokens', {
			method  : 'GET',
			headers : { Authorization: `Bearer ${refreshToken}` }
		})
			.then(value => value.json())
			.then(value => {
				setAccessToken(value.accessToken!)
				setRefreshToken(value.refreshToken!)
			})
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>email</label>
				<input
					value={email}
					onChange={handleEmail}
				/>
				<label>password</label>
				<input
					value={password}
					onChange={handlePassword}
					type="password"
				/>
				<button type="submit">Submit</button>
			</form>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
				<label>Access Token: {accessToken}</label>
				<label>Refresh Token: {refreshToken}</label>
				<button onClick={handleRefresh}>Refresh token pair</button>
			</div>
		</>
	)
}
