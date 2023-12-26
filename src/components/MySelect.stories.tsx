import {Meta, Story} from '@storybook/react';
import {ISelectProps} from './../interfaces'; 
import {action} from '@storybook/addon-actions';
import MySelect from './MySelect';
import './../index.css';

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
    labelSize: 'text-sm',
    labelWeight: 'font-medium',
    fieldSize: '2.5',
    placeholder: 'Type to find',
    width: '32',
    setFilter: action('setFilter'),
    handleSelectOption: action('onChange'),
};

export const Large = Template.bind({});
Large.args = {
    options: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
        { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    ],
    labelSize: 'text-lg',
    labelWeight: 'font-semibold',
    fieldSize: '3.5',
    placeholder: 'Type to find',
    width: '1/2',
    setFilter: action('setFilter'),
    handleSelectOption: action('onChange'),
}

export const Medium = Template.bind({});
Medium.args = {
    options: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
        { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    ],
    labelSize: 'text-base',
    labelWeight: 'font-normal',
    fieldSize: '2',
    placeholder: 'Type to find',
    width: '32',
    setFilter: action('setFilter'),
    handleSelectOption: action('onChange'),
}

export const Small = Template.bind({});
Small.args = {
    options: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
        { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
        { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    ],
    labelSize: 'text-xs',
    labelWeight: 'font-light',
    fieldSize: '1.5',
    placeholder: 'Type to find',
    width: '32',
    setFilter: action('setFilter'),
    handleSelectOption: action('onChange'),
}