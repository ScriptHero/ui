import Box from './Box.vue';

export default {
  title: 'ScriptHero/Box',
  component: Box,
  argTypes: {

  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Box },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Box v-bind="args">{{ args.label }}</Box>',
});

export const Example = Template.bind({});
Example.args = {
  padding: 'large',
  paddingY: 'large',
  label: 'hi'
};
