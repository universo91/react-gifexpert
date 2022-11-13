import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en GifGriItem', () => {

    const url = 'http://localhost/algo.jpg';
    const title = 'este es un mal dia';

    test('Debe de mostrar correctamente el componente', () => {
        const wrapper = shallow( <GifGridItem url = { url } title = { title } /> );

        expect( wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title', () => {

        const wrapper = shallow( <GifGridItem title = {title} /> );
        
        const p = wrapper.find('p').text().trim();
        expect( p ).toBe( title );
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {

        const wrapper = shallow( <GifGridItem url = { url } title = { title } />);
        const img = wrapper.find('img');
        

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('debe de tener animate_fadeIn', () => {

        const wrapper = shallow( <GifGridItem />);
    
        const div = wrapper.find( 'div' );
        const className = div.prop('className');
    
        expect( className.includes('animate__fadeIn') ).toBe( true );
    });

       
}); 

