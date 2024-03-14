/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from '@storybook/react-native';

global.STORIES = [
  {
    titlePrefix: '',
    directory: './components',
    files: '**/*.stories.?(ts|tsx|js|jsx)',
    importPathMatcher:
      '^\\.[\\\\/](?:components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$',
  },
];

import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';

import { decorators, parameters } from './preview';

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require('react-native').LogBox.ignoreLogs([
      '`clearDecorators` is deprecated and will be removed in Storybook 7.0',
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    // require('../src/components/Disclosure/Actionsheet/Actionsheet.stories.tsx'),
    // require('../src/components/Disclosure/Accordion/Accordion.stories.tsx'),
    // require('../src/components/Typography/Text/Text.stories.tsx'),
    // require('../src/components/Overlay/AlertDialog/AlertDialog.stories.tsx'),
    // require('../src/components/MediaAndIcons/Avatar/Avatar.stories.tsx'),
    // require('../src/components/Feedback/Alert/Alert.stories.tsx'),
    // require('../src/components/Forms/Button/Button.stories.tsx'),
    // require('../src/components/DataDisplay/Badge/Badge.stories.tsx'),
    require('../src/components/primitives/Button/Button.stories.tsx'),
    // require('../src/components/Forms/Checkbox/Checkbox.stories.tsx'),
    // require('../src/components/DataDisplay/Divider/Divider.stories.tsx'),
    // require('../src/components/Others/Fab/Fab.stories.tsx'),
    // require('../src/components/Forms/FormControl/FormControl.stories.tsx'),
    // require('../src/components/Typography/Heading/Heading.stories.tsx'),
    // require('../src/components/Layout/HStack/HStack.stories.tsx'),
    // require('../src/components/MediaAndIcons/Icon/Icon.stories.tsx'),
    // require('../src/components/Forms/Input/Input.stories.tsx'),
    // require('../src/components/Forms/Link/Link.stories.tsx'),
    // require('../src/components/Overlay/Menu/Menu.stories.tsx'),
    // require('../src/components/Overlay/Modal/Modal.stories.tsx'),
    // require('../src/components/Overlay/Popover/Popover.stories.tsx'),
    // require('../src/components/Forms/Pressable/Pressable.stories.tsx'),
    // require('../src/components/Feedback/Progress/Progress.stories.tsx'),
    // require('../src/components/Forms/Radio/Radio.stories.tsx'),
    // require('../src/components/Forms/Select/Select.stories.tsx'),
    // require('../src/components/Forms/Slider/Slider.stories.tsx'),
    // require('../src/components/Feedback/Spinner/Spinner.stories.tsx'),
    // require('../src/components/Forms/Switch/Switch.stories.tsx'),
    // require('../src/components/Forms/Textarea/Textarea.stories.tsx'),
    // require('../src/components/Feedback/Toast/Toast.stories.tsx'),
    // require('../src/components/Overlay/Tooltip/Tooltip.stories.tsx'),
    // require('../src/components/Layout/VStack/VStack.stories.tsx'),
    // require('../src/components/Layout/LinearGradient/LinearGradient.stories.tsx'),
    // require('../src/components/Forms/Tabs/Tabs.stories.tsx'),
    // require('../src/components/MediaAndIcons/Image/Image.stories.tsx'),
    // require('../src/react-native-components/FlatList/FlatList.stories.tsx'),
    // require('../src/react-native-components/SectionList/SectionList.stories.tsx'),
    // require('../src/react-native-components/ScrollView/ScrollView.stories.tsx'),
    // require('../src/react-native-components/View/View.stories.tsx'),
    // require('../src/react-native-components/KeyboardAvoidingView/KeyboardAvoidingView.stories.tsx'),
    // require('../src/react-native-components/StatusBar/StatusBar.stories.tsx'),
    // require('../src/hooks/use-token/use-token.stories.tsx'),
    // require('../src/hooks/use-breakpoint-value/use-breakpoint-value.stories.tsx'),
    // require('../src/hooks/use-color-mode/use-color-mode.stories.tsx'),
  ];
};

configure(getStories, module, false);
