export interface IFullName {
    firstname: string;
    lastname: string;
    pokemon: string[];
}

export interface IPokemon {
    name: string;
    url: string;
}

export interface IError {
    message?: string;
}

interface IOption {
    url: string;
    name: string;
}

export interface ISelectProps {
    options: IOption[];
    value: string;
    onChange: (s: string) => void;
    setFilter: (s: string) => void;
    selectedPokemons: string[];
    isSelectVisible: boolean;
    setSelectVisible: (bool: boolean) => void;
    setModalVisible: (bool: boolean) => void;
    setPopUpVisible: (bool: boolean) => void;
}

export interface IBadge {
    value: string;
    onRemove: () => void;
}