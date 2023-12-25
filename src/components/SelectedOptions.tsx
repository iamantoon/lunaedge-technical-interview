import Badge from './Badge';
import {ISelectProps} from '../interfaces';

export interface IRemovePokemonProps extends Pick<ISelectProps, 'removePokemon' | 'selectedPokemons'> {}

const SelectedOptions = ({selectedPokemons, removePokemon}: IRemovePokemonProps) => {
    return (
        <div>
            {selectedPokemons && selectedPokemons.map((pokemon, index) => (
                <Badge key={pokemon} value={pokemon} onRemove={() => removePokemon(index)} />
            ))}
        </div>
    );
    
}

export default SelectedOptions;