import Icon from './Icon.vue';

export default {
  title: 'ScriptHero/Icon',
  component: Icon,
  argTypes: {
    name: { control: { type: 'select', options: ['map', 'pharmacy'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  template: '<Icon name="pharmacy"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Icon',
};

