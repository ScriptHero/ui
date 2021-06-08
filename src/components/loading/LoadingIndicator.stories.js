import LoadingIndicator from './LoadingIndicator.vue'

export default {
  title: 'Draft/LoadingIndicator',
  component: LoadingIndicator,
};

const Template = () => ({
  components: { LoadingIndicator },
  setup() {},
  template: '<LoadingIndicator/>',
});

export const Default = Template.bind({});
