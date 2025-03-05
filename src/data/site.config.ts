interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://www.nagaswamy.com', // Write here your website url
	author: 'Venkat Nagaswamy', // Site author
	title: "Venkat's Blog", // Site title.
	description: 'Well, the name says it all. It is my blog',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
