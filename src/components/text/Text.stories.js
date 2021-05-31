import Text from './Text.vue';

export default {
  title: 'ScriptHero/Text',
  component: Text,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Text },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Text v-bind="args">{{args.label}}</Text>',
});

export const Body = Template.bind({});
Body.args = {
  tag: 'p',
  size: 'body',
  label: 'Text',
};


