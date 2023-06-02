interface ResData {
	userId: number;
	id: number;
	title: string;
}

class Fifteenthtitle {
	static #URL = 'https://jsonplaceholder.typicode.com/posts';
	static #ID = 15;

	static #get() {
		fetch(Fifteenthtitle.#URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('Network response was not ok.');
				}
			})
			.then((resData: ResData[]) => Fifteenthtitle.#getTitleFromJson(resData))
			.then((title) => console.log(title))
			.catch(({ message }) => console.error(message));
	}

	static #getTitleFromJson(resData: ResData[]) {
		const itemWithTitle = resData.find((item) => item.id === Fifteenthtitle.#ID);
		if (itemWithTitle) {
			return itemWithTitle.title;
		} else {
			throw new Error('Title not found.');
		}
	}

	run() {
		Fifteenthtitle.#get();
	}
}

const fifteenthtitle = new Fifteenthtitle();
fifteenthtitle.run();