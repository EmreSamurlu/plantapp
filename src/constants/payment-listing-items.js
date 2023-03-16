import {Platform} from 'react-native';

export default [
  {
    title: 'Unlimited',
    description: 'Plant Identify',
    icon_name: 'scanner',
    icon_size: 18,
  },
  {
    title: 'Faster',
    description: 'Process',
    icon_name: 'speedometer',
    icon_size: Platform.OS === 'ios' ? 14 : 18,
  },
  {
    title: 'Detailed',
    description: 'Plant Care',
    icon_name: 'leaves',
    icon_size: 18,
  },
];
