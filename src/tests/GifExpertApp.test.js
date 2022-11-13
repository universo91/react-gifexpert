import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp';
describe('Pruebas sobre GifExpertApp', () => {

    test('El componente debe de mostrarse correctamente', () => {
        
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        
        const categories =['one punch', 'dragon ball'];

        const wrapper = shallow( <GifExpertApp defaultCategories = { categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe(categories.length);
    })
})