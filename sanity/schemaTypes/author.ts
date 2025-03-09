import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            type: 'number',
        }),
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'username',
            type: 'string',
        }),
        defineField({
            name: 'email',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
            },
        }),
        defineField({
            name: 'imageUrl',
            title: 'ImageUrl',
            type: 'string',
            // validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
        }),
        defineField({
            name: 'bio',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'imageUrl',
        },
    },
});
