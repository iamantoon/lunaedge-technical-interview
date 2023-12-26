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
    labelSize: string;
    labelWeight: string;
    fieldSize: string;
    placeholder: string;
    width: string;
    handleSelectOption: (s: string) => void;
    setFilter: (s: string) => void;
    selectedPokemons: string[];
    isSelectVisible: boolean;
    setSelectVisible: (bool: boolean) => void;
    setPopUpVisible: (bool: boolean) => void;
    removePokemon: (index: number) => void;
    onFocus?: (bool: boolean) => void
}

export interface IBadge {
    value: string;
    onRemove: () => void;
}

export interface IModal {
    title: string;
    content: any;
    onAccept: () => void;
    onDecline: () => void;
    isModalVisible: boolean;
}

export interface IPopUp {
    isPopUpVisible: boolean;
    onAccept: () => void;
    onDecline: () => void;
    message: string;
}