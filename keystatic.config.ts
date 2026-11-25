import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Silt & Kiln Catalog CMS',
    },
  },
  collections: {
    objects: collection({
      label: 'Ceramic Objects',
      slugField: 'title',
      path: 'src/content/objects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Object Name' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Vessels', value: 'Vessels' },
            { label: 'Tableware', value: 'Tableware' },
            { label: 'Lighting', value: 'Lighting' },
          ],
          defaultValue: 'Vessels',
        }),
        priceIdr: fields.integer({
          label: 'Price (IDR)',
          defaultValue: 1800000,
        }),
        priceLabel: fields.text({
          label: 'Display Price Label',
          defaultValue: 'Rp 1.800.000',
        }),
        dimensions: fields.text({
          label: 'Dimensions',
          defaultValue: '20 × 14 cm',
        }),
        clayBody: fields.text({
          label: 'Clay Body',
          defaultValue: 'Speckled Buff Stoneware',
        }),
        firingTemp: fields.text({
          label: 'Firing Temperature',
          defaultValue: '1,260°C Reduction',
        }),
        availability: fields.text({
          label: 'Availability / Lead Time',
          defaultValue: 'In Stock · Ships in 3 days',
        }),
        careNotes: fields.text({
          label: 'Care & Material Notes',
          multiline: true,
        }),
        summary: fields.text({
          label: 'Short Description',
          multiline: true,
        }),
        coverImage: fields.image({
          label: 'Primary Product Image',
          directory: 'public/uploads/objects',
          publicPath: '/uploads/objects/',
        }),
        coverAlt: fields.text({
          label: 'Primary Image Alt Text',
        }),
        hoverImage: fields.image({
          label: 'Secondary Hover Image',
          directory: 'public/uploads/objects',
          publicPath: '/uploads/objects/',
        }),
        hoverAlt: fields.text({
          label: 'Secondary Image Alt Text',
        }),
        glazes: fields.array(
          fields.object({
            name: fields.text({ label: 'Glaze Name' }),
            hex: fields.text({ label: 'Swatch Hex' }),
            finish: fields.text({ label: 'Surface Finish' }),
          }),
          {
            label: 'Available Glazes',
            itemLabel: (props) => props.fields.name.value || 'Glaze',
          }
        ),
        gallery: fields.array(
          fields.object({
            image: fields.image({
              label: 'Gallery Image',
              directory: 'public/uploads/objects',
              publicPath: '/uploads/objects/',
            }),
            alt: fields.text({ label: 'Alt Text' }),
          }),
          {
            label: 'Product Gallery',
            itemLabel: (props) => props.fields.alt.value || 'Gallery Image',
          }
        ),
        order: fields.integer({
          label: 'Catalog Order',
          defaultValue: 1,
        }),
        featured: fields.checkbox({
          label: 'Featured on Home',
          defaultValue: true,
        }),
        gridSpan: fields.select({
          label: 'Catalog Grid Span',
          options: [
            { label: 'Wide (7 columns)', value: 'wide' },
            { label: 'Compact (5 columns)', value: 'compact' },
            { label: 'Full Feature (12 columns)', value: 'full' },
          ],
          defaultValue: 'wide',
        }),
        content: fields.markdoc({
          label: 'Object Notes & Provenance',
          extension: 'md',
        }),
      },
    }),
  },
  singletons: {
    studio: singleton({
      label: 'Studio Profile',
      path: 'src/content/studio/profile',
      format: { data: 'json' },
      schema: {
        brandName: fields.text({ label: 'Brand Name' }),
        headline: fields.text({ label: 'Hero Headline', multiline: true }),
        subline: fields.text({ label: 'Studio Subline', multiline: true }),
        kilnBatch: fields.text({ label: 'Current Kiln Batch Status' }),
        location: fields.text({ label: 'Workshop Location' }),
        hours: fields.text({ label: 'Studio Visit Hours' }),
        email: fields.text({ label: 'Studio Email' }),
        disclosure: fields.text({ label: 'Showcase Disclosure', multiline: true }),
        craftStages: fields.array(
          fields.object({
            step: fields.text({ label: 'Step Number' }),
            title: fields.text({ label: 'Stage Title' }),
            temperatureOrDuration: fields.text({ label: 'Duration / Temp' }),
            description: fields.text({ label: 'Description', multiline: true }),
            details: fields.array(fields.text({ label: 'Detail' }), {
              label: 'Technical Details',
              itemLabel: (props) => props.value || 'Detail',
            }),
          }),
          {
            label: 'Kiln & Craft Stages',
            itemLabel: (props) => props.fields.title.value || 'Stage',
          }
        ),
      },
    }),
  },
});
