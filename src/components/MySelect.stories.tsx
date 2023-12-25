import {Meta, Story} from '@storybook/react';
import {ISelectProps} from './../interfaces'; 
import {action} from '@storybook/addon-actions';
import MySelect from './MySelect';

export default {
  title: 'MySelect',
  component: MySelect,
  argTypes: {
    options: {
      control: { type: 'array' },
    },
    value: {
      control: { type: 'text' },
    },
    setFilter: { action: 'setFilter' },
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
  },
} as Meta;

type TemplateArgs = ISelectProps;

const Template: Story<TemplateArgs> = (args) => <MySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
        { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    ],
    setFilter: action('setFilter'),
    handleSelectOption: action('onChange'),
};