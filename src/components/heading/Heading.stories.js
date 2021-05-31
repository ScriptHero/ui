import Heading from './Heading.vue';

export default {
  title: 'ScriptHero/Heading',
  component: Heading,
  argTypes: {
    level: { control: { type: 'select', options: ['1', '2', '3', '4', '5'] } }
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Heading },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Heading v-bind="args">{{ args.label }}</Heading>',
});

export const HeadingLevel1 = Template.bind({});
HeadingLevel1.args = {
  level: '1',
  label: 'Heading 1',
};

export const HeadingLevel2 = Template.bind({});
HeadingLevel2.args = {
  level: '2',
  label: 'Heading 2',
};

