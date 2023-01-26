export interface RefreshTokenPayload {
	email: string;
	sub: number;
	fph: string;
	exp: number;
	iat: number;
	jti: string;
}

export const defaultRules = {
	'block-spacing' : 'error',
	'brace-style'   : ['error', '1tbs', { allowSingleLine: true }],
	'comma-spacing' : 'error',
	'comma-style'   : 'error',
	'eol-last'      : 'error'
}
