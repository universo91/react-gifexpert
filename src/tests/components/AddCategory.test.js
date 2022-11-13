import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory';
describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper ;

    beforeEach( () => {
        jest.clearAllMocks(); // para borrar todos los simulacros
        wrapper = shallow( <AddCategory setCategories={ setCategories} /> );
    });

    test('Debe de mostrarse correctametne', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto ', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        // input.simulate('change', evento junto con el target y su valor );
        input.simulate('change', { target: { value } } );

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test('No debe de postear la informacin con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} }); 

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Debe llamar al setCategories y limpiar la caja de texto', () => {
        const value = 'Mi precioso';
        // 1. simular el input change
        wrapper.find('input').simulate('change', { target: { value } });

        //2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3.setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled(); 

        //expect( setCategories ).toHaveBeenCalledTimes( Numero de veces en que es llamado la funcion);  
        expect( setCategories ).toHaveBeenCalledTimes(1);
        
        // toHaveBeenCalledWith( indica que recibe una funcion ) 
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );  
        
        // 4. el valor del input debe de estar vacio
        expect( wrapper.find('input').prop('value') ).toBe( '' ); 
        

    });
})