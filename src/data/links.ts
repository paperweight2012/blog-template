import TwitterIcon from '@/components/icons/TwitterIcon'
import GithubIcon from '@/components/icons/GithubIcon'
import LinkedinIcon from '@/components/icons/LinkedinIcon'
import BlueskyIcon from '@/components/icons/BlueskyIcon'

// ADD YOUR SOCIAL NETWORKS HERE
export const SOCIALNETWORKS = [
	{
		name: 'Github',
		url: 'https://github.com/paperweight2012',
		icon: GithubIcon
	},

	//{
	//	name: 'Twitter',
	//	url: 'https://twitter.com/venkatnagaswamy',
	//	icon: TwitterIcon
	//},
	{
		name: 'Bluesky',
		url: 'https://bsky.app/profile/paperweight2024.bsky.social',
		icon: BlueskyIcon
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/venkatnagaswamy',
		icon: LinkedinIcon
	}
] as const
