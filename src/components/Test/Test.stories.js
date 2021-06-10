import Test from './Text.vue';
 
export default {
  title: 'ScriptHero/Test',
  component: Test,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Test },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Test/>',
});

export const Body = Template.bind({});


