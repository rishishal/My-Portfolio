export default {
  name: 'testimonials',
  title: 'How Build',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'step',
      title: 'Step',
      type: 'string',
    },
    {
      name: 'imgurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'points',
      title: 'Points',
      type: 'string',
    },
  ],
}
