import { formatJobList } from "../pages/Results";
import { formatFetchParams } from "../pages/Results";
 
describe('La fonction formatJobList', () => {

	test('ajoute une virgule à un item', () => {
		const expectedState = 'item2,'
		expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
	})

	test('ne met pas de virgule pour le dernier élément', () => {
		const expectedState = 'item3'
		expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
	})
})

describe('La fonction formatFetchParams', () => {

	it('should use the good format', () => {
		const expectedResult = 'a1=true'
		expect(formatFetchParams({1: true})).toEqual(expectedResult)
	})

	it('should add & to concatenate elements', () => {
		const expectedResult = 'a1=true&a2=false'
		expect(formatFetchParams({1: true, 2: false})).toEqual(expectedResult)
	})
})