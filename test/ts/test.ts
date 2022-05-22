import eslint from "eslint"
import prettier from "prettier"

import { ParserOptions } from "@typescript-eslint/parser"


const MockDecorator =
	(_: Record<string, string | string[]>): ClassDecorator =>
	() => {}
const MockPropertyDecorator = (): PropertyDecorator => () => {}
const InjectRepository =
	(_): ParameterDecorator =>
	() => {}

type Repository<T> = Record<string, T>
type TestType = string

@MockDecorator({
	selector: "app-button",
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.css"]
})
export class MockClass {
	@MockPropertyDecorator() text: string
	@MockPropertyDecorator() color: string

	@Field((_returns: string) => String, { description: "count like dish" })
	like: number

	constructor (
		@InjectRepository("qweqweqwe") private _menuRepository: Repository<TestType>
	) {}

	ngOnInit (): void {}
}
