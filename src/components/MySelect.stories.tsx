import {action} from '@storybook/addon-actions';
import {ISelectProps} from './../interfaces'; 
import MySelect from './MySelect';
import {Meta, Story} from '@storybook/react';
import './../index.css';

export default {
  title: 'MySelect',
  component: MySelect,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    placeholder: {
        type: 'string',
        description: 'Set a placeholder'
    },
    fontSize: {
        type: 'string',
        description: 'Set the font size settings',
        defaultValue: 'text-sm',
        control: {
            type: 'radio'
        },
        options: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl']
    },
    fontWeight: {
        type: 'string',
        description: 'Set the font weight settings',
        defaultValue: 'font-medium',
        control: {
            type: 'radio'
        },
        options: ['font-light', 'font-normal', 'font-medium', 'font-bold', 'font-extrabold']
    },
    width: {
        type: 'string',
        description: 'Set the width of a component',
        defaultValue: 'full',
        control: {
            type: 'radio'
        },
        options: ['full', '16']
    },
    fieldSize: {
        type: 'string',
        description: 'Set the padding (inner spacing) of a component',
        defaultValue: '',
        control: {
            type: 'radio'
        },
        options: ['1', '1.5', '2', '2.5', '3']
    },
    options: {
        control: { type: 'array' },
    },
    isSelectVisible: { control: 'boolean' },
    setFilter: { action: 'setFilter' },
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
    removePokemon: { control: { disable: true } },
    setPopUpVisible: { control: { disable: true } },
    selectedPokemons: { control: { disable: true } },
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
    fontSize: 'text-sm',
    fontWeight: 'font-medium',
    fieldSize: '2.5',
    placeholder: 'Type to find',
    width: 'full',
    isSelectVisible: true, 
    setFilter: action('setFilter'),
    handleSelectOption: action('onChange'),
    setSelectVisible: action('setSelectVisible(true)')
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
    fontSize: 'text-lg',
    fontWeight: 'font-semibold',
    fieldSize: '3',
    placeholder: 'Type to find',
    width: 'full',
    isSelectVisible: true,
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
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    fieldSize: '2',
    placeholder: 'Type to find',
    width: 'full',
    isSelectVisible: true,
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
    fontSize: 'text-xs',
    fontWeight: 'font-light',
    fieldSize: '1.5',
    placeholder: 'Type to find',
    width: 'full',
    isSelectVisible: true,
    setFilter: action('setFilter'),
    handleSelectOption: action('onChange'),
}