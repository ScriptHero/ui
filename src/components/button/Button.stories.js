import Button from './Button.vue';

export default {
  title: 'ScriptHero/Button',
  component: Button,
  argTypes: {
    type: { control: { type: 'radio', options: ['primary', 'secondary'] } }
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.label }}</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};

