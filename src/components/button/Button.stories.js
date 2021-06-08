import Button from './Button.vue';

export default {
  title: 'ScriptHero/Button',
  component: Button,
  argTypes: {
    type: { control: { type: 'radio', options: ['primary', 'secondary'] } },
    disabled: { type: 'boolean' }
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
  disabled: false,
  title: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
  disabled: false,
  title: 'Button',
};


export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: 'primary',
  label: 'Disabled Button',
  disabled: true,
  title: 'Button',
};

