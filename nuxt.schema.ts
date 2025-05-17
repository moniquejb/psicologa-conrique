import {field, group} from '@nuxt/content/preview'

export default defineNuxtSchema({
	appConfig: {
		contact: group({
			title: 'Contact Details',
			description: 'Contact details configuration.',
			icon: 'lucide:link',
			fields: {
				email: field({
					type: 'string',
					title: 'Email',
					description: 'Your email address.',
					icon: 'lucide:email',
					default: 'default@email.com',
				}),

				whatsapp: field({
					type: 'string',
					title: 'Whatsapp',
					description: "Your Whatsapp number (include area code, but omit the '+'.",
					icon: 'lucide:whatsapp',
					default: '2700000000',
				}),
			},
		}),
		socials: group({
			title: 'Socials',
			description: 'Socials configuration',
			icon: 'lucide:link',
			fields: {
				facebook: field({
					type: 'string',
					title: 'Facebook',
					description: 'Your Facebook account.',
					icon: 'lucide:facebook',
					default: 'https://www.facebook.com/myusername',
				}),

				instagram: field({
					type: 'string',
					title: 'Instagram',
					description: 'Your Instagram account.',
					icon: 'lucide:instagram',
					default: 'https://www.instagram.com/myusername',
				}),
			},
		}),
		seo: group({
			title: 'SEO',
			description: 'SEO configuration',
			icon: 'lucide:search',
			fields: {
				title: field({
					type: 'string',
					title: 'Title',
					description: 'Title of your website (used in the preview of your website).',
					icon: 'lucide:title',
					default: 'My website',
				}),
				description: field({
					type: 'string',
					title: 'Description',
					description: 'Description of your website (used in the preview of your website).',
					icon: 'lucide:description',
					default: 'My website description',
				}),
				url: field({
					type: 'string',
					title: 'URL',
					description: 'Public URL of your website.',
					icon: 'lucide:link',
					default: 'https://mywebsite.com',
				}),
			},
		}),
	}
})