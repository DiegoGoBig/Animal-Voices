export const WP_API_URL = 'https://cms.gobigagency.co/animalvoices/wp-json/wp/v2';

export interface WPPost {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text?: string;
        }>;
        'wp:term'?: Array<Array<{
            id: number;
            name: string;
            slug: string;
            taxonomy: string;
        }>>;
    };
}

export interface WPPage {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    slug: string;
}

export const wpService = {
    getPosts: async (perPage: number = 3, categoryId?: number): Promise<WPPost[]> => {
        try {
            let url = `${WP_API_URL}/posts?_embed&per_page=${perPage}`;
            if (categoryId) {
                url += `&categories=${categoryId}`;
            }
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch posts');
            return await response.json();
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        }
    },

    getPages: async (): Promise<WPPage[]> => {
        try {
            const response = await fetch(`${WP_API_URL}/pages`);
            if (!response.ok) throw new Error('Failed to fetch pages');
            return await response.json();
        } catch (error) {
            console.error('Error fetching pages:', error);
            return [];
        }
    },

    getPageBySlug: async (slug: string): Promise<WPPage | null> => {
        try {
            const response = await fetch(`${WP_API_URL}/pages?slug=${slug}`);
            if (!response.ok) throw new Error('Failed to fetch page');
            const data = await response.json();
            return data.length > 0 ? data[0] : null;
        } catch (error) {
            console.error('Error fetching page:', error);
            return null;
        }
    },

    getPostBySlug: async (slug: string): Promise<WPPost | null> => {
        try {
            const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);
            if (!response.ok) throw new Error('Failed to fetch post');
            const data = await response.json();
            return data.length > 0 ? data[0] : null;
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    }
};
