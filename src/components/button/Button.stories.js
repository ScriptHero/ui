import Button from './Button.vue';

export default {
  title: 'Draft/Button',
  component: Button,
  argTypes: {
    type: { control: { type: 'radio', options: ['primary', 'secondary'] } },
    disabled: { type: 'boolean' },
    loading: { type: 'boolean' },
  },
  args: {
    disabled: false,
    loading: false
  }
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
  ...Primary.args,
  disabled: true,
};


export const PrimaryLoading = Template.bind({})
PrimaryLoading.args = {
  ...Primary.args,
  loading: true
}

export const PrimaryLoadingDisabled = Template.bind({})
PrimaryLoadingDisabled.args = {
  ...Primary.args,
  loading: true,
  disabled: true
}
