export default defineAppConfig({
	contact: {
		email: 'info@psicologaconrique.com',
		whatsapp: "34617019537"
	},
	socials: {
		facebook: 'https://www.facebook.com/Psic%C3%B3loga-Cristina-Romo-Conrique-337878334034461',
		instagram: 'https://www.instagram.com/psicologa_cristinaconrique/'
	},
	seo: {
		title: 'Cristina Conrique Psicología - Atención Psicológica Online',
		description: 'Encuentra la ayuda de un experto desde donde te encuentres. Agenda tu cita online con un profesional. Tu psicóloga online.',
		url: 'https://psicologaconrique.com',
	},
	ui: {
		colors: {
			primary: 'orange',
			secondary: 'musk',
			neutral: 'zinc',
			tertiary: 'teal'
		},
		button: {
			slots: {
				base: 'cursor-pointer',
			},
			defaultVariants: {
				color: 'neutral',
			},
		},
		input: {
			defaultVariants: {
				color: 'neutral',
			},
		},
		textarea: {
			defaultVariants: {
				color: 'neutral',
			},
		},
		icons: {
			loading: 'lucide:loader',
		},
	},
	link: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/apple-touch-icon.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/favicon-32x32.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/favicon-16x16.png',
		},
		// {
		// 	rel: 'manifest',
		// 	href: '/site.webmanifest',
		// },
	],
})