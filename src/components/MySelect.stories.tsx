import MySelect from './MySelect';
import {action} from '@storybook/addon-actions';
import './../index.css';

export default {
    title: 'Select',
    component: MySelect,
    tags: ['autodocs'],
    argTypes: {
            isSelectVisible: {
            type: 'boolean',
            description: 'Determines if the select is open',
            defaultValue: false,
            options: [true, false],
        },
            value: {
            type: 'string',
            description: 'Used to search among options',
            defaultValue: '',
        },
            options: {
            type: 'array',
            description: 'Select options',
        },
    },
};

const Template = (args) => <MySelect {...args} />;

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
    onChange: action('onChange'),
    onFocus: action('onFocus')
};``