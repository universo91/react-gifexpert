import { renderHook } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('prubas en el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {

        //const { loading, data:images } = useFetchGifs( category );
        // result es parte de renderHook, solo lo estamos desestructurando
        const { result, waitForNextUpdate } =  renderHook( () => useFetchGifs('One punch') );
        //console.log( result.current );
        const { data, loading } = result.current; 
        await waitForNextUpdate();
       
        expect(data).toEqual([]);
        expect( loading).toBe(true);
        
    });

    test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
        //waitForNeextUpadate usamos para esperar un nuevo cambio en el estado, es una 
        // funcion que regresa una promesa, que no retorna nada, pero esta promesa 
        // nos va indicar cuando ya sucedio un cambio en el estado de nuestro 
        // custom hook
        const { result, waitForNextUpdate } =  renderHook( () => useFetchGifs('one punch') );
        //console.log( result.current );
        await waitForNextUpdate();
        const { data, loading } = result.current; 

        expect(data.length).toBe(10);
        expect( loading).toBe(false);

    });


});

