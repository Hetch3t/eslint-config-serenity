/* eslint-disable @typescript-eslint/no-unused-vars */

import eslint from 'eslint'
import prettier from 'prettier'

import { ParserOptions } from '@typescript-eslint/parser'


const MockDecorator =
	(_: Record<string, string | string[]>): ClassDecorator =>
		() => {}
const MockPropertyDecorator = (): PropertyDecorator => () => {}

@MockDecorator({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class MockClass {
	@MockPropertyDecorator() text: string
	@MockPropertyDecorator() color: string

	constructor () {}

	ngOnInit (): void {}
}
