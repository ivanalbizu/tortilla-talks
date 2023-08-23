import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const tricks = await getCollection('trick');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: tricks.map((trick) => ({
			...trick.data,
			link: `/trick/${trick.slug}/`,
		})),
	});
}
