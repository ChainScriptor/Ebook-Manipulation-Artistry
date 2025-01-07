export default {
  name: 'ebook',
  title: 'Ebook',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Τίτλος',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Περιγραφή',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Τιμή',
      type: 'number',
    },
    {
      name: 'available',
      title: 'Διαθέσιμο',
      type: 'boolean',
    },
    {
      name: 'coverImage',
      title: 'Εξώφυλλο',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}