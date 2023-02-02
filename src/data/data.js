import { nanoid } from 'nanoid';

export const rates = [
	{ currencyOrName: "USD MOEX", rate: "63,52,49", growth: "+0,09" },
	{ currencyOrName: "EUR MOEX", rate: "70,86", growth: "+0,14" },
	{ currencyOrName: "НЕФТЬ", rate: "64,90", growth: "+1,63%" }
];

export const searchTitles = [
	{
		link: '/',
		title: 'Маркет',
	},
	{
		link: '/',
		title: 'Видео',
	},
	{
		link: '/',
		title: 'Картинки',
	},
	{
		link: 'https://yandex.ru/news/?utm_source=main_stripe_big',
		title: 'Новости',
	},
	{
		link: 'https://yandex.ru/maps/?ll=37.729727%2C55.978720&utm_source=main_stripe_big&z=10',
		title: 'Карты',
	},
	{
		link: 'https://translate.yandex.ru/?utm_source=main_stripe_big',
		title: 'Переводчик',
	},
	{
		link: 'https://music.yandex.ru/home?utm_source=main_stripe_big',
		title: 'Музыка',
	}
];

export const widgetsItems = [
	{ widgetName: "Погода", widgetBody: [{ id: nanoid(), now: '10C', days: "+12C", nigth: '+7C' }] },
	{ widgetName: "Карта", widgetBody: [{ id: nanoid(), map: 'расписание' }] },
	{
		widgetName: "Эфир", widgetBody: [{ id: nanoid(), imgContext: '/', title: 'Управление как искусство', description: "успех" },
		{ id: nanoid(), imgContext: '/', title: 'Ночь мир в это время', description: "earth TV" },
		{ id: nanoid(), imgContext: '/', title: 'Андрей Возн...', description: "секретно" }]
	},
	{ widgetName: "Телепрограмма", widgetBody: [{ id: nanoid(), imgContext: '/', title: 'Управление как искусство', description: "успех" }] },
	{
		widgetName: "Посещаемое", widgetBody: [{ id: nanoid(), imgContext: '/', title: 'Недвижимость', description: "- о сталинках" },
		{ id: nanoid(), imgContext: '/', title: 'Маркет', description: "люстры светильники" },
		{ id: nanoid(), imgContext: '/', title: 'Авто.ру ', description: "привод 4х4 до 500000" }]
	}
];