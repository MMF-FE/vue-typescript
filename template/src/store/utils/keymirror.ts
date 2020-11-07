/**
 * Create an object with values equal to its key names.
 */

export default function<T>(obj: T): { [K in keyof T]: K } {
	const ret: any = {}
	let key

	for (key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			ret[key] = key
		}
	}

	return ret as { [K in keyof T]: K }
}

